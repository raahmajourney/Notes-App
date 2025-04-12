document.addEventListener('DOMContentLoaded', () => {
    const notesList = document.getElementById('notes-list');
    const form = document.getElementById('add-note-form');
    let notes = JSON.parse(localStorage.getItem('notes')) || [...notesData];

  
    function renderNotes() {
      notesList.innerHTML = '';
      notes.forEach(note => {
        const item = document.createElement('note-item');
        item.note = note;
        notesList.appendChild(item);
      });
    }

    function saveToLocalStorage() {
        localStorage.setItem('notes', JSON.stringify(notes));
      }
      
  
    renderNotes();
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const titleInput = document.getElementById('note-title');
      const bodyInput = document.getElementById('note-body');
      const title = titleInput.value.trim();
      const body = bodyInput.value.trim();
  
      if (title.length < 3 || body.length < 5) return;
  
      const newNote = {
        id: 'notes-' + Date.now(),
        title,
        body,
        createdAt: new Date().toISOString(),
        archived: false,
      };
  
      notes.unshift(newNote);
      saveToLocalStorage();
      renderNotes();
      form.reset();
    });
  });
  