export default function linkHandler (e, link) {
  e.preventDefault();
  window.open(link, '_blank');
};