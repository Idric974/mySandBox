(async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/user");

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const getedDatas = await response.json();
    console.log("⭐ ==> ", { getedDatas });
  } catch (error) {
    console.log(
      `🔴 Catch Error | Une erreur s'est produite |
    `,
      error.message
    );
  }
})();
