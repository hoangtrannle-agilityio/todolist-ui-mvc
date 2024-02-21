export const todoItemTemplate = (index, id, title, isCompleted) => {
  return `
        <th scope="row">${index}</th>
            <td>${title}</td>
            <td>${!isCompleted ? "In progress" : "Finished"}</td>
            <td>
                <button type="submit" class="btn btn-danger">Delete</button>
                ${
                  !isCompleted
                    ? '<button type="submit" class="btn btn-success ms-1">Finished</button>'
                    : ""
                }
            </td>    
        </td>
    `;
};
