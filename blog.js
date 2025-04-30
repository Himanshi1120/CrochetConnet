
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}


function addComment() {
    var commentText = document.getElementById('commentInput').value;
    var fileInput = document.getElementById('fileInput');
    var files = fileInput.files;

    if (commentText.trim() === '' && files.length === 0) {
      return; // Don't add empty comments
    }

    var commentList = document.getElementById('comments');
    var commentItem = document.createElement('li');
    commentItem.className = 'comment';

    // Add comment text
    var commentTextElement = document.createElement('p');
    commentTextElement.textContent = commentText;
    commentItem.appendChild(commentTextElement);

    // Add uploaded files (photos)
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var fileElement = document.createElement('img');
      fileElement.className = 'file-preview';
      fileElement.src = URL.createObjectURL(file);
      commentItem.appendChild(fileElement);
    }

    commentList.appendChild(commentItem);

    // Clear input fields
    document.getElementById('commentInput').value = '';
    fileInput.value = null;
  }