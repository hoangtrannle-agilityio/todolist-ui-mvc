export const todoItemTemplate = (index, id, title, isCompleted) => {
  return `
        <th scope="row">${index + 1}</th>
            <td>${title}</td>
            <td>${!isCompleted ? "In progress" : "Finished"}</td>
            <td>
                <button type="submit" class="btn btn-danger btn-delete">Delete</button>
                ${
                  !isCompleted
                    ? '<button type="submit" class="btn btn-success ms-1 btn-finish">Finished</button>'
                    : ""
                }
            </td>    
        </td>
    `;
};
