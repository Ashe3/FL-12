const structure = [
  {
    folder: true,
    title: 'Films',
    children: [
      {
        title: 'Iron Man.avi'
      },
      {
        folder: true,
        title: 'Fantasy',
        children: [
          {
            title: 'The Lord of the Rings.avi'
          },
          {
            folder: true,
            title: 'New folder 1',
            children: false
          }
        ]
      }
    ]
  },
  {
    folder: true,
    title: 'Documents',
    children: [
      {
        folder: true,
        title: 'EPAM Homework answers',
        children: null
      }
    ]
  }
];

const rootNode = document.getElementById('root');

const createNode = data => {
  const node = document.createElement('div');
  const { folder, title, children } = data;
  node.className = !folder ? 'file' : 'folder hide';
  node.innerHTML = `
  <span class="title">
    <i class="material-icons" 
    style="color: 
    ${
      !folder
        ? 'rgb(124, 124, 124);">insert_drive_file'
        : ' rgb(255, 208, 0);">folder'
    }</i>
      ${title}
  </span>`;

  if (!children && node.classList.contains('folder')) {
    node.innerHTML = `${node.innerHTML} <span class="ph">Folder is empty</span>`;
  }

  return node;
};

const parse = (element, parent) => {
  const { children } = element;
  const node = createNode(element);
  parent.append(node);

  if (!children) {
    return;
  }
  children.forEach(ch => parse(ch, node));
};

structure.forEach(el => parse(el, rootNode));

const folders = rootNode.querySelectorAll('.title');

const toggle = event => {
  event.stopPropagation();
  const { target } = event;
  const currentNode = target.classList;
  const icon = target.querySelector('i');
  const { classList } = event.target.parentNode;

  if (classList.contains('folder')) {
    if (currentNode.contains('title')) {
      classList.toggle('hide');
    }
    if (classList.contains('hide')) {
      icon.textContent = 'folder';
    } else if (icon) {
      icon.textContent = 'folder_open';
    }
  }
};

folders.forEach(folder => folder.parentNode.addEventListener('click', toggle));
