export function homePageSetUp(content, sausage, fish){
    //ALL BELOW IS MAIN CONTENT JUNK
    let homePage = document.createElement('div');
    homePage.setAttribute('id', 'home-page');

    content.appendChild(homePage);

    let svgColumn = document.createElement('div');
    svgColumn.setAttribute('id', 'svg-column');

    svgColumn.innerHTML += sausage
    svgColumn.innerHTML += fish


    homePage.appendChild(svgColumn);

    let columnOne = document.createElement('div');
    columnOne.setAttribute('id', 'columnOne');
    columnOne.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    homePage.appendChild(columnOne)

    let columnTwo = document.createElement('div');
    columnTwo.setAttribute('id', 'columnTwo');
    columnTwo.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    homePage.appendChild(columnTwo)




}

