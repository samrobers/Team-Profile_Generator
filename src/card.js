function card(employee) {
  let fieldName = "";
  switch (employee.getRole()) {
    case "Manager":
      fieldName = employee.getOfficeNumber();
      break;
    case "Intern":
      fieldName = employee.getSchool();
      break;
    case "Engineer":
      fieldName = employee.getGitHub();
      break;
  }

  return `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${employee.name} </h5>
            <h5>${employee.getRole()}</h5>
            <p class="card-text">
             ${employee.email}
             ${employee.id}
            </p>
            <p class="card-text">
              <small class="text-muted">${fieldName}</small>
            </p>
          </div>
        </div>
    `;
}

module.exports = card;
