export const state = () => ({
  customToolbar: [
    [{ header: [false, 2, 3, 4, 5, 6] }],
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    [{ align: '' }, { align: 'center' }, { align: 'right' }],
    ['code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    // [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    ['link', 'image'],
    ['clean'], // remove formatting button
  ],
})