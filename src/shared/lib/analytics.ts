/**
 * Analytics Wrapper for Google Analytics 4 and Yandex.Metrika
 *
 * Usage:
 * 1. Add GA4 script to index.html or App.tsx
 * 2. Add Yandex.Metrika script to index.html or App.tsx
 * 3. Initialize: initAnalytics('G-XXXXXXXXXX', 12345678)
 * 4. Track events: trackEvent('button_click', { button_name: 'cta' })
 * 5. Track page views: trackPageView('/services')
 */

// ============================================================================
// Types
// ============================================================================

export interface AnalyticsEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export interface PageViewData {
  page_path: string;
  page_title?: string;
  page_location?: string;
}

export interface UserProperties {
  user_id?: string;
  user_type?: string;
  [key: string]: any;
}

// ============================================================================
// Configuration
// ============================================================================

let GA4_ID: string | null = null;
let YM_ID: number | null = null;
let isInitialized = false;
let consentGiven = false;

// ============================================================================
// Initialization
// ============================================================================

/**
 * Initialize analytics services
 * @param ga4Id - Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
 * @param ymId - Yandex.Metrika Counter ID (e.g., 12345678)
 */
export function initAnalytics(ga4Id?: string, ymId?: number): void {
  GA4_ID = ga4Id || null;
  YM_ID = ymId || null;

  // Check if user has given consent (GDPR compliance)
  checkConsent();

  if (consentGiven) {
    loadScripts();
  }

  isInitialized = true;
  console.log("📊 Analytics initialized:", { ga4: !!GA4_ID, ym: !!YM_ID });
}

/**
 * Check user consent for analytics
 */
function checkConsent(): void {
  // Check localStorage for consent
  const consent = localStorage.getItem("analytics_consent");
  consentGiven = consent === "granted";

  // If no consent stored, default to true (можно изменить на false для GDPR)
  if (!consent) {
    consentGiven = true;
    localStorage.setItem("analytics_consent", "granted");
  }
}

/**
 * Grant consent for analytics
 */
export function grantConsent(): void {
  consentGiven = true;
  localStorage.setItem("analytics_consent", "granted");

  if (isInitialized) {
    loadScripts();
  }
}

/**
 * Revoke consent for analytics
 */
export function revokeConsent(): void {
  consentGiven = false;
  localStorage.setItem("analytics_consent", "denied");
}

/**
 * Load analytics scripts dynamically
 */
function loadScripts() {
  const w: any = window;

  // Google Analytics 4
  if ((GA4_ID as any) && typeof w !== "undefined") {
    if (!w.gtag) {
      // Load GA4 script
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      document.head.appendChild(script);

      // Initialize gtag
      w.dataLayer = w.dataLayer || [];
      w.gtag = function () {
        w.dataLayer.push(arguments);
      };
      w.gtag("js", new Date());
      w.gtag("config", GA4_ID, {
        page_path: w.location.pathname,
        send_page_view: true,
      });
    }
  }

  // Yandex.Metrika
  if ((YM_ID as any) && typeof w !== "undefined") {
    if (!w.ym) {
      // Load Yandex.Metrika script
      (function (m: any, e: any, t: any, r: any, i: any, k?: any, a?: any) {
        m[i] =
          m[i] ||
          function () {
            (m[i].a = m[i].a || []).push(arguments);
          };
        m[i].l = 1 * +new Date();

        for (let j = 0; j < e.scripts.length; j++) {
          if (e.scripts[j].src === r) return;
        }

        k = e.createElement(t);
        a = e.getElementsByTagName(t)[0];
        k.async = 1;
        k.src = r;
        a.parentNode.insertBefore(k, a);
      })(w, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      w.ym(YM_ID, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    }
  }
}

// ============================================================================
// Event Tracking
// ============================================================================

/**
 * Track custom event
 * @param eventName - Name of the event
 * @param eventParams - Additional parameters
 *
 * @example
 * trackEvent('cta_click', {
 *   button_name: 'Get Started',
 *   page: 'home'
 * })
 */
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
): void {
  if (!consentGiven) return;

  // Google Analytics 4
  if (GA4_ID && window.gtag) {
    window.gtag("event", eventName, eventParams);
  }

  // Yandex.Metrika
  if (YM_ID && window.ym) {
    window.ym(YM_ID, "reachGoal", eventName, eventParams);
  }

  console.log("📊 Event tracked:", eventName, eventParams);
}

/**
 * Track page view
 * @param pagePath - Path of the page
 * @param pageTitle - Title of the page
 *
 * @example
 * trackPageView('/services', 'Услуги')
 */
export function trackPageView(pagePath: string, pageTitle?: string): void {
  if (!consentGiven) return;

  const data: PageViewData = {
    page_path: pagePath,
    page_title: pageTitle || document.title,
    page_location: window.location.href,
  };

  // Google Analytics 4
  if (GA4_ID && window.gtag) {
    window.gtag("config", GA4_ID, data);
  }

  // Yandex.Metrika
  if (YM_ID && window.ym) {
    window.ym(YM_ID, "hit", pagePath, {
      title: data.page_title,
    });
  }

  console.log("📊 Page view tracked:", data);
}

/**
 * Track button click
 * @param buttonName - Name of the button
 * @param location - Location of the button (e.g., 'header', 'hero')
 */
export function trackButtonClick(buttonName: string, location?: string): void {
  trackEvent("button_click", {
    button_name: buttonName,
    location: location || "unknown",
  });
}

/**
 * Track form submission
 * @param formName - Name of the form
 * @param success - Whether submission was successful
 */
export function trackFormSubmit(
  formName: string,
  success: boolean = true
): void {
  trackEvent("form_submit", {
    form_name: formName,
    success: success,
  });
}

/**
 * Track project view
 * @param projectId - ID of the project
 * @param projectName - Name of the project
 * @param category - Category of the project
 */
export function trackProjectView(
  projectId: string,
  projectName: string,
  category?: string
): void {
  trackEvent("project_view", {
    project_id: projectId,
    project_name: projectName,
    category: category,
  });
}

/**
 * Track service interest
 * @param serviceName - Name of the service
 */
export function trackServiceInterest(serviceName: string): void {
  trackEvent("service_interest", {
    service_name: serviceName,
  });
}

/**
 * Track AI consultant interaction
 * @param action - Type of interaction (e.g., 'question_asked', 'chat_opened')
 * @param questionText - Text of the question (optional)
 */
export function trackAIConsultant(action: string, questionText?: string): void {
  trackEvent("ai_consultant_interaction", {
    action: action,
    question: questionText || "",
  });
}

/**
 * Track outbound link click
 * @param url - URL of the link
 * @param linkText - Text of the link
 */
export function trackOutboundLink(url: string, linkText?: string): void {
  trackEvent("outbound_click", {
    url: url,
    link_text: linkText || "",
  });
}

/**
 * Track scroll depth
 * @param percentage - Scroll percentage (25, 50, 75, 100)
 */
export function trackScrollDepth(percentage: number): void {
  trackEvent("scroll_depth", {
    percentage: percentage,
  });
}

/**
 * Track video interaction
 * @param action - Type of action (e.g., 'play', 'pause', 'complete')
 * @param videoName - Name of the video
 */
export function trackVideo(action: string, videoName: string): void {
  trackEvent("video_interaction", {
    action: action,
    video_name: videoName,
  });
}

// ============================================================================
// E-commerce Tracking (for future use)
// ============================================================================

/**
 * Track purchase/order
 * @param orderId - ID of the order
 * @param value - Total value
 * @param currency - Currency (default: RUB)
 */
export function trackPurchase(
  orderId: string,
  value: number,
  currency: string = "RUB"
): void {
  trackEvent("purchase", {
    transaction_id: orderId,
    value: value,
    currency: currency,
  });
}

// ============================================================================
// User Identification
// ============================================================================

/**
 * Set user ID for tracking
 * @param userId - User ID
 */
export function setUserId(userId: string): void {
  if (!consentGiven) return;

  // Google Analytics 4
  if (GA4_ID && window.gtag) {
    window.gtag("config", GA4_ID, {
      user_id: userId,
    });
  }

  // Yandex.Metrika
  if (YM_ID && window.ym) {
    window.ym(YM_ID, "setUserID", userId);
  }
}

/**
 * Set custom user properties
 * @param properties - User properties
 */
export function setUserProperties(properties: UserProperties): void {
  if (!consentGiven) return;

  // Google Analytics 4
  if (GA4_ID && window.gtag) {
    window.gtag("set", "user_properties", properties);
  }

  // Yandex.Metrika
  if (YM_ID && window.ym) {
    window.ym(YM_ID, "userParams", properties);
  }
}

// ============================================================================
// Type declarations for window object
// ============================================================================

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    ym?: (id: number, method: string, ...args: any[]) => void;
  }
}

// ============================================================================
// Export all functions
// ============================================================================

export default {
  initAnalytics,
  grantConsent,
  revokeConsent,
  trackEvent,
  trackPageView,
  trackButtonClick,
  trackFormSubmit,
  trackProjectView,
  trackServiceInterest,
  trackAIConsultant,
  trackOutboundLink,
  trackScrollDepth,
  trackVideo,
  trackPurchase,
  setUserId,
  setUserProperties,
};
