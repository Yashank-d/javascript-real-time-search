let users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
  },
  {
    name: "amita mehta",
    pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
    bio: "main character energy 🎬 | coffee > everything ☕✨",
  },
  {
    name: "isha oberoi",
    pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
    bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
  },
  {
    name: "Ojin Oklawa",
    pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
    bio: "too glam to give a damn 💅 | filter free soul",
  },
  {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
  },
  {
    name: "tanay rawat",
    pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
    bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
  },
  {
    name: "mohit chhabra",
    pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
    bio: "aesthetic overload 📸🕊️ | living in lowercase",
  },
];

// show all users

function showUsers(arr) {
  arr.forEach(function (user) {
    // 1. Create the main container div with the class "card"
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";

    // 2. Create the image element
    const img = document.createElement("img");
    img.src = user.pic;
    img.className = "bg-img";

    // 3. Create the blurred-layer div
    const blurredLayerDiv = document.createElement("div");
    blurredLayerDiv.className = "blurred-layer";
    blurredLayerDiv.style.backgroundImage = `url(${user.pic})`;

    // 4. Create the content container div
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";

    // 5. Create the h3 element and set its text
    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    // 6. Create the p element and set its text
    const p = document.createElement("p");
    p.textContent = user.bio;

    // 7. Append the h3 and p to the content div
    contentDiv.appendChild(h3);
    contentDiv.appendChild(p);

    // 8. Append the img, blurred-layer, and content divs to the main card div
    cardDiv.appendChild(img);
    cardDiv.appendChild(blurredLayerDiv);
    cardDiv.appendChild(contentDiv);

    // 9. Finally, append the completed card to the document's body (or another element)
    document.querySelector(".cards").appendChild(cardDiv);
  });
}
showUsers(users);

//filter everytime when the input is done
// show filtered useers

let inp = document.querySelector(".inp");

inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });
  if (newUsers.length === 0) {
    document.querySelector(".cards").innerHTML =
      "<p class='no-user-found'>User not found</p>";
  } else {
    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
  }
});
