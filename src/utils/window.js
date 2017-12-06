export default function (doc) {
  return (doc && (doc.defaultView || doc.parentWindow)) || window
}
