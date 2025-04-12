class AppBar extends HTMLElement {
    connectedCallback() {
      const title = this.getAttribute('title') || 'Notes App';
      this.innerHTML = `<header><h1>${title}</h1></header>`;
    }
  }
  customElements.define('app-bar', AppBar);
  
  class NoteItem extends HTMLElement {
    set note(data) {
      this.innerHTML = `
        <div class="note-card">
          <h3>${data.title}</h3>
          <small>${new Date(data.createdAt).toLocaleDateString()}</small>
          <p>${data.body}</p>
        </div>
      `;
    }
  }
  customElements.define('note-item', NoteItem);
  
  class NoteForm extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <h2>Tambah Catatan</h2>
        <form id="add-note-form">
          <input type="text" id="note-title" placeholder="Judul Catatan" required>
          <small class="error" id="title-error"></small>
          <textarea id="note-body" placeholder="Isi Catatan" required></textarea>
          <small class="error" id="body-error"></small>
          <button type="submit">Tambah</button>
        </form>
      `;
  
      const titleInput = this.querySelector('#note-title');
      const bodyInput = this.querySelector('#note-body');
      const titleError = this.querySelector('#title-error');
      const bodyError = this.querySelector('#body-error');
  
      // Realtime validation
      titleInput.addEventListener('input', () => {
        titleError.textContent = titleInput.value.trim().length < 3
          ? 'Judul minimal 3 karakter.'
          : '';
      });
  
      bodyInput.addEventListener('input', () => {
        bodyError.textContent = bodyInput.value.trim().length < 5
          ? 'Isi catatan minimal 5 karakter.'
          : '';
      });
    }
  }
  customElements.define('note-form', NoteForm);
  