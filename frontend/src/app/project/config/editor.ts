export const quillConfiguration = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],
        [{ list: 'orderred'}, { list: 'bullet'}],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: []}, { background: []}], // dropdown with defaults from theme
        [{ align: [] }], // dropdown with defaults from theme
        ['link', 'image'],
        ['clean'] // remove formatting button
    ]
}