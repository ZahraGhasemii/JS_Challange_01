const noteList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-08-14",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Study Physics company",
    createdAt: "2024-08-13",
    isCompleted: true,
  },
  {
    id: 3,
    title: "React JS interview",
    createdAt: "2024-08-10",
    isCompleted: true,
  },
  {
    id: 4,
    title: "Cooking - washing - taking a nap react",
    createdAt: "2024-08-12",
    isCompleted: true,
  },
];

function filter({ title, status, sort }) {
  let copiedArray = [...noteList];
  title = new String(title).toLocaleLowerCase();

  if (title != "") {
    copiedArray = copiedArray.filter((f) =>
      f.title.toLocaleLowerCase().includes(title)
    );
  }

  if (status != "") {
    copiedArray = copiedArray.filter(
      (f) =>
        f.isCompleted ==
        (status.toLocaleLowerCase() == "completed" ? true : false)
    );
  }

  if (sort === "asc")
    copiedArray.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  else
    copiedArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  console.log(copiedArray);
}

filter({ title: "", status: "completed", sort: "asc" });
filter({ title: "", status: "completed", sort: "desc" });
filter({ title: "CO", status: "", sort: "asc" });
filter({ title: "CO", status: "", sort: "desc" });
filter({ title: "React", status: "completed", sort: "asc" });
filter({ title: "React", status: "uncompleted", sort: "des" });
