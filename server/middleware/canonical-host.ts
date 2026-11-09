/**
 * Keep the public portfolio on the same hostname used by its canonical tag
 * and XML sitemap. The DNS/hosting layer must also route the bare domain here.
 */
export default defineEventHandler((event) => {
  const url = getRequestURL(event);

  if (url.hostname.toLowerCase() !== 'joshhaywood-portfolio.com') {
    return;
  }

  return sendRedirect(event, `https://www.joshhaywood-portfolio.com${url.pathname}${url.search}`, 308);
});
