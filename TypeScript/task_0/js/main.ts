interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Smith",
  age: 21,
  location: "Riyadh",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Jones",
  age: 23,
  location: "Dubai",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const nameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

document.body.appendChild(table);
