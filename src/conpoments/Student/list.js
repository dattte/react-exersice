const lists = [
]

const createId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
}

const onDelete = id => {
  lists.forEach((item, index) => {
    if (item.id === id) { 
      lists.splice(index, 1)
    }
    renderList()
  })
}

const renderList = () => {
  const tbody = document.getElementById('what-todo')
  let html = ``
  lists.forEach(item => {
    html = html + `
    <tr>
      <td><input type="checkbox" value="${item.id}"></td>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>
        <div class = "btn">
        <button type="button" class="btn btn-danger" onclick="onDelete(${item.id})">Delete</button>
        </div>
      </td>
    </tr>`
  })
  tbody.innerHTML = html
}


const myPlus = () => {
  const name = document.getElementById('list').value
  if (document.getElementById('list').value) {
    const id = createId()
    const object = {
      id: id,
      name: name,
    }
    lists.push(object)
    renderList()
  }
  else {
    alert('làm ơn thêm text')
  }
}

const showAll = () => {

}
