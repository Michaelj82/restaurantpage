import './style.css';
//selecting parts of document
const content = document.getElementById('content');
const mainContent = document.getElementById('main-content')
const header = document.getElementById('header-content');
const navigation = document.getElementById('navigation-content');

//svgs
const pineTreeHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 502.391 502.391" style="enable-background:new 0 0 502.391 502.391;" xml:space="preserve" width="512" height="512"><g><polygon style="fill:#E95B2D;" points="436.293,417.975 347.09,278.211 402.98,278.211 317.275,155.724 363.353,155.724    251.195,12.182 139.037,155.724 185.116,155.724 99.411,278.211 155.301,278.211 66.097,417.975  "/><rect x="222.862" y="417.975" style="fill:#FABA45;" width="56.667" height="76.916"/><rect x="152.991" y="269.115" transform="matrix(-0.8578 -0.5139 0.5139 -0.8578 126.9735 701.3111)" style="fill:#0F2639;" width="15" height="127.956"/><path style="fill:#0F2639;" d="M287.029,425.475h162.949l-89.204-139.764h56.607l-85.705-122.487h47.056L251.195,0L123.659,163.224   h47.056L85.009,285.711h56.607L52.413,425.475h162.949v61.916h-15.003v-38.613h-15v38.613h-15.003v-24.612h-15v24.612h-19.661v15   h79.667h71.667h79.667v-15h-79.667V425.475z M79.781,410.475l89.204-139.764h-55.173l85.705-122.487h-45.102l96.78-123.86   l96.78,123.86h-45.102l85.705,122.487h-55.173l70.054,109.761h-74.598v15h84.172l9.576,15.003H287.029h-71.667H79.781z    M230.362,487.391v-61.916h41.667v61.916H230.362z"/><rect x="264.193" y="380.472" style="fill:#0F2639;" width="44.667" height="15"/></g></svg>'
const mountainHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 502.188 502.188" style="enable-background:new 0 0 502.188 502.188;" xml:space="preserve" width="512" height="512"><g><polygon style="fill:#FABA45;" points="265.082,207.882 224.094,248.869 187.094,180.869 134.328,194.936 196.637,63.481  "/><path style="fill:#E95B2D;" d="M185.43,453.321h195.99l-38.961-82.196h-50.566c-9.757,0-17.667-7.91-17.667-17.667   c0-9.757,7.91-17.666,17.667-17.666h33.819L196.637,63.481l68.445,144.4l-40.988,40.988l-37-68l-52.767,14.067l62.309-131.455   L98.26,271.029h141.822c13.807,0,25,11.193,25,25s-11.193,25-25,25H74.561L11.855,453.321h153.573"/><polygon style="fill:#FABA45;" points="297.513,200.451 337.094,258.401 379.309,219.09 333.994,123.487  "/><path style="fill:#E95B2D;" d="M379.309,219.09l-42.215,39.311l-39.582-57.95l-17.977,37.926l46.175,97.415h65.81   c9.757,0,17.667,7.91,17.667,17.666c0,9.757-7.91,17.667-17.667,17.667h-49.063l38.961,82.196h108.914L379.309,219.09z"/><path style="fill:#FABA45;" d="M265.082,296.029c0,13.807-11.193,25-25,25H56.64c-13.807,0-25-11.193-25-25l0,0   c0-13.807,11.193-25,25-25h183.442C253.889,271.029,265.082,282.221,265.082,296.029L265.082,296.029z"/><path style="fill:#E95B2D;" d="M317.65,157.967l16.344-34.48l11.621,24.516c13.912-9.9,22.995-26.143,22.995-44.518   c0-30.165-24.453-54.618-54.618-54.618c-30.165,0-54.618,24.453-54.618,54.618c0,30.165,24.453,54.618,54.618,54.618   C315.223,158.103,316.439,158.048,317.65,157.967z"/><path style="fill:#FABA45;" d="M409.188,353.459c0,9.757-7.91,17.667-17.667,17.667h-99.629c-9.757,0-17.667-7.91-17.667-17.667   l0,0c0-9.757,7.91-17.666,17.667-17.666h99.629C401.278,335.792,409.188,343.702,409.188,353.459L409.188,353.459z"/><path style="fill:#0F2639;" d="M381.697,206.617L381.697,206.617l-26.758-56.452c13.354-11.733,21.17-28.755,21.17-46.681   c0-34.252-27.866-62.118-62.118-62.118c-34.252,0-62.118,27.866-62.118,62.118c0,31.537,23.629,57.641,54.11,61.584l-17.092,36.059   l0,0l-9.355,19.738L203.414,60.269l0,0l-6.777-14.298l-6.777,14.298l0,0l-96.344,203.26H56.64c-17.92,0-32.5,14.58-32.5,32.5   c0,17.92,14.58,32.5,32.5,32.5h6.066L0,460.821h165.428v-15H23.71l7.111-15.003h104.603v-15H37.931l41.375-87.29h160.776   c17.92,0,32.5-14.58,32.5-32.5c0-17.92-14.58-32.5-32.5-32.5H110.115l29.501-62.24l43.709-11.652l38.977,71.632l40.56-40.56   l8.375,17.669l0,0l42.62,89.915h-21.963c-13.877,0-25.167,11.289-25.167,25.166c0,13.877,11.29,25.167,25.167,25.167h45.821   l15.926,33.598l15.925,33.598H185.43v15h191.245h16.6h108.914L381.697,206.617z M240.082,278.529c9.649,0,17.5,7.851,17.5,17.5   c0,9.649-7.851,17.5-17.5,17.5H69.816H56.64c-9.649,0-17.5-7.851-17.5-17.5c0-9.649,7.851-17.5,17.5-17.5h29.765H240.082z    M225.886,236.471l-35.023-64.368l-42.824,11.416l48.598-102.527l59.404,125.325L225.886,236.471z M338.367,246.967l-32.234-47.192   l27.86-58.778l8.677,18.306l0,0l27.51,58.039L338.367,246.967z M312.847,150.589c-25.455-0.609-45.973-21.505-45.973-47.104   c0-25.981,21.137-47.118,47.118-47.118c25.981,0,47.118,21.137,47.118,47.118c0,12.131-4.72,23.722-12.938,32.403l-14.178-29.911   L312.847,150.589z M291.892,363.625c-5.606,0-10.167-4.561-10.167-10.167c0-5.606,4.561-10.166,10.167-10.166h29.073h16.601h53.955   c5.606,0,10.167,4.56,10.167,10.166c0,5.606-4.561,10.167-10.167,10.167h-44.317h-16.601H291.892z M386.164,445.821l-3.142-6.629   l-28.708-60.567h37.207c13.877,0,25.167-11.29,25.167-25.167c0-13.877-11.29-25.166-25.167-25.166h-61.065l-42.62-89.916   l10.855-22.901l37.13,54.36l41.1-38.272l101.558,214.259H386.164z"/></g></svg>'
const sausageHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 504.75 504.75" style="enable-background:new 0 0 504.75 504.75;" xml:space="preserve" width="512" height="512"><g><rect x="209.414" y="333.007" style="fill:#FABA45;" width="85.923" height="141.21"/><path style="fill:#FABA45;" d="M252.375,253.438c-5.059,0.001-9.977-0.591-14.708-1.673v81.242h29.416v-81.242   C262.353,252.847,257.435,253.438,252.375,253.438z"/><path style="fill:#E95B2D;" d="M150.043,171.843h273.764c20.101,0,37.749-10.447,47.849-26.197   c2.589,1.662,5.661,2.638,8.968,2.638c9.183,0,16.627-7.444,16.627-16.627c0-9.184-7.444-16.628-16.627-16.628   c9.183,0,16.627-7.446,16.627-16.627c0-9.185-7.444-16.629-16.627-16.629c-3.307,0-6.379,0.978-8.968,2.64   c-10.1-15.752-27.748-26.199-47.849-26.198L80.943,58.213c-20.101,0-37.749,10.447-47.851,26.199   c-2.587-1.662-5.66-2.64-8.966-2.64c-9.184,0-16.627,7.444-16.627,16.629c0,9.181,7.443,16.627,16.627,16.627   c-9.184,0-16.627,7.444-16.627,16.628c0,9.183,7.443,16.627,16.627,16.627c3.306,0,6.379-0.976,8.966-2.638   c10.102,15.75,27.75,26.197,47.85,26.197h49.099"/><path style="fill:#0F2639;" d="M504.75,98.401c0-13.305-10.823-24.129-24.127-24.129c-2.169,0-4.313,0.292-6.38,0.861   c-12.156-15.399-30.578-24.421-50.437-24.42h-98.24V23.033h-15v27.681l-116.384-0.001l0.001-27.68h-15l-0.001,27.68H80.943   c-19.857,0-38.28,9.022-50.438,24.421c-2.066-0.569-4.21-0.861-6.379-0.861C10.823,74.272,0,85.097,0,98.401   c0,6.438,2.535,12.296,6.659,16.627C2.535,119.359,0,125.218,0,131.656c0,13.304,10.823,24.127,24.127,24.127   c2.169,0,4.313-0.292,6.379-0.86c12.157,15.398,30.58,24.42,50.437,24.42h49.099v-15H80.942c-16.874,0-32.401-8.503-41.536-22.746   l-4.053-6.318l-6.314,4.058c-1.475,0.946-3.173,1.447-4.912,1.447c-5.032,0-9.127-4.095-9.127-9.127   c0-5.033,4.095-9.128,9.127-9.128v-15c-5.032,0-9.127-4.095-9.127-9.127c0-5.033,4.095-9.129,9.127-9.129   c1.737,0,3.435,0.501,4.912,1.449l6.314,4.058l4.053-6.318c9.135-14.244,24.662-22.748,41.537-22.748h70.953l-36.132,36.134   l10.607,10.605l46.736-46.739h32.208l-36.132,36.134l10.607,10.605l46.737-46.739h32.205l-36.132,36.133l10.608,10.607   l46.739-46.74l32.205,0.001l-36.132,36.132l10.607,10.607l46.739-46.739h32.205l-36.131,36.132l10.607,10.607l46.738-46.739h37.018   c16.875-0.001,32.402,8.503,41.535,22.746l4.051,6.317l6.314-4.054c1.478-0.949,3.179-1.451,4.916-1.451   c5.032,0,9.127,4.096,9.127,9.129c0,5.032-4.095,9.127-9.127,9.127v15c5.032,0,9.127,4.095,9.127,9.128   c0,5.032-4.095,9.127-9.127,9.127c-1.739,0-3.439-0.501-4.916-1.449l-6.314-4.054l-4.051,6.316   c-9.133,14.243-24.66,22.746-41.535,22.746H150.043v15h29.141v8.401c-0.001,19.551,7.612,37.932,21.437,51.756   c8.414,8.414,18.52,14.511,29.547,18.008v67.999h-28.253v156.21h100.923v-156.21h-28.254v-67.999   c11.026-3.496,21.134-9.594,29.547-18.007c13.824-13.825,21.438-32.205,21.436-51.757v-8.401h98.24   c19.857,0,38.28-9.021,50.437-24.42c2.067,0.568,4.211,0.86,6.38,0.86c13.304,0,24.127-10.823,24.127-24.127   c0-6.438-2.535-12.297-6.659-16.628C502.215,110.697,504.75,104.84,504.75,98.401z M287.837,340.507v18.624h-48.42v15h48.42v92.586   h-70.923v-126.21h13.253h44.416H287.837z M259.583,325.507h-14.416v-64.919c2.362,0.23,4.748,0.347,7.152,0.349   c0.019,0,0.036,0.001,0.055,0.001h0.001c0.001,0,0.001,0,0.001,0c2.423,0,4.827-0.118,7.207-0.35V325.507z M310.566,187.744   c0,15.545-6.053,30.159-17.043,41.15c-7.474,7.473-16.624,12.656-26.6,15.213l-1.513,0.346c-8.585,1.965-17.437,1.977-26.071,0   l-1.504-0.344c-9.98-2.557-19.133-7.74-26.608-15.216c-10.991-10.991-17.044-25.605-17.044-41.149v-8.401h116.383V187.744z"/></g>'
const fishingrodHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 506.065 506.065" style="enable-background:new 0 0 506.065 506.065;" xml:space="preserve" width="512" height="512"><g><path style="fill:#E95B2D;" d="M325.828,396.051h85.427c0-31.956-42.714-48.371-42.714-48.371S325.828,364.095,325.828,396.051z"/><path style="fill:#FABA45;" d="M305.992,254.348c0,74.834,62.549,93.332,62.549,93.332s62.547-18.498,62.547-93.332   s-62.547-93.333-62.547-93.333S305.992,179.514,305.992,254.348z"/><path style="fill:#E95B2D;" d="M350.042,224.6c0-10.214,8.281-18.497,18.499-18.497c10.216,0,18.498,8.283,18.498,18.497   c0,10.22-8.282,18.501-18.498,18.501C358.323,243.1,350.042,234.819,350.042,224.6z"/><path style="fill:#E95B2D;" d="M74.978,386.481v-23.437c0-8.601,6.973-15.573,15.573-15.573l0,0c8.6,0,15.573,6.973,15.573,15.573   v119.947c0,8.601-6.974,15.573-15.573,15.573l0,0c-8.601,0-15.573-6.973-15.573-15.573v-76.385"/><circle style="fill:#FABA45;" cx="138.372" cy="379.72" r="32.248"/><path style="fill:#0F2639;" d="M385.9,348.102c5.64-3.132,12.277-7.502,18.913-13.434c15.407-13.774,33.774-38.891,33.774-80.32   s-18.367-66.546-33.774-80.32c-11.186-10-22.382-15.57-28.772-18.224V15.836C383.537,15.282,391.085,15,398.679,15V0   c-84.308,0-163.568,32.831-223.183,92.445c-59.614,59.615-92.445,138.877-92.445,223.184v25.6   c-9.051,3.121-15.573,11.718-15.573,21.815v23.437h15v-23.437c0-4.451,3.622-8.073,8.073-8.073c4.451,0,8.073,3.622,8.073,8.073   v119.947c0,4.451-3.622,8.073-8.073,8.073c-4.451,0-8.073-3.622-8.073-8.073v-76.385h-15v76.385   c0,12.723,10.351,23.073,23.073,23.073c12.723,0,23.073-10.351,23.073-23.073v-72.203c6.796,5.425,15.396,8.679,24.748,8.679   c21.917,0,39.747-17.831,39.747-39.748s-17.83-39.748-39.747-39.748c-10.859,0-20.712,4.382-27.894,11.465   c-2.768-4.732-7.169-8.394-12.428-10.207v-25.6c0-5.542,0.164-11.059,0.46-16.55c16.968-1.34,31.422-13.929,34.564-31.344   c1.973-10.954-0.914-21.668-7.156-29.902c9.651-3.704,17.756-11.29,21.857-21.638c4.099-10.349,3.385-21.426-1.111-30.735   c10.193-1.723,19.641-7.55,25.707-16.882c6.062-9.33,7.551-20.332,4.983-30.347c0.401,0.013,0.804,0.026,1.205,0.026   c9.935-0.001,19.848-3.862,27.333-11.5c7.783-7.946,11.416-18.436,10.88-28.761c2.865,0.672,5.804,1.017,8.754,1.017   c7.415,0,14.905-2.155,21.488-6.626c9.207-6.255,14.842-15.819,16.355-26.047c4.956,2.269,10.377,3.485,15.905,3.485   c4.955-0.001,9.993-0.969,14.844-3.008c10.262-4.312,17.675-12.568,21.18-22.289c6.399,4.648,14.21,7.3,22.418,7.3   c2.516,0,5.069-0.249,7.63-0.765c5.9-1.189,11.209-3.683,15.693-7.113v111.851c-6.392,2.654-17.587,8.225-28.773,18.225   c-15.408,13.774-33.775,38.891-33.775,80.32s18.367,66.546,33.776,80.32c6.636,5.932,13.273,10.302,18.913,13.434   c-13.975,8.495-32.853,24.339-32.853,47.949v7.5h100.427v-7.5C418.754,372.44,399.875,356.597,385.9,348.102z M138.372,354.972   c13.646,0,24.747,11.102,24.747,24.748c0,13.647-11.102,24.748-24.747,24.748c-13.646,0-24.748-11.102-24.748-24.748   C113.624,366.073,124.726,354.972,138.372,354.972z M118.314,265.075c-1.759,9.748-9.354,17.004-18.592,18.729   c1.52-14.528,4.07-28.83,7.629-42.818C115.462,245.809,120.077,255.286,118.314,265.075z M133.831,210.671   c-3.667,9.252-12.596,14.876-22.039,14.688c4.35-13.881,9.705-27.405,16.034-40.489   C134.839,191.202,137.497,201.417,133.831,210.671z M159.795,160.405c-5.422,8.339-15.276,12.074-24.491,10.033   c6.99-12.638,14.921-24.803,23.759-36.414C164.622,141.61,165.194,152.096,159.795,160.405z M195.179,116.262   c-6.931,7.071-17.275,8.8-25.883,5.041c5.329-6.27,10.923-12.366,16.807-18.25c4.414-4.414,8.954-8.655,13.588-12.758   C203.619,98.823,202.101,109.193,195.179,116.262z M238.587,79.98c-8.195,5.565-18.687,5.212-26.384-0.185   c11.433-9.076,23.432-17.253,35.913-24.498C250.342,64.468,246.81,74.394,238.587,79.98z M288.309,52.991   c-9.179,3.856-19.446,1.408-25.921-5.476c12.957-6.603,26.369-12.239,40.149-16.874C302.927,40.085,297.492,49.133,288.309,52.991z    M342.383,36.36c-9.769,1.972-19.343-2.459-24.326-10.486c13.926-3.852,28.181-6.695,42.675-8.51   C359.21,26.651,352.106,34.4,342.383,36.36z M313.492,254.348c0-28.561,9.523-51.68,28.305-68.717   c10.998-9.976,22.185-14.922,26.743-16.668c4.572,1.751,15.752,6.698,26.743,16.668c18.782,17.036,28.305,40.156,28.305,68.717   c0,28.561-9.522,51.68-28.304,68.716c-10.909,9.895-21.994,14.838-26.632,16.624l-0.111-0.043l-0.111,0.043   c-4.639-1.786-15.724-6.729-26.633-16.624C323.015,306.027,313.492,282.908,313.492,254.348z M334.362,388.551   c4.979-17.856,26.56-29.194,34.189-32.705c3.571,1.636,10.189,4.987,16.815,10.012c9.332,7.078,15.146,14.684,17.364,22.693   H334.362z"/><path style="fill:#0F2639;" d="M368.54,250.6c14.335,0,25.998-11.664,25.998-26.001c0-14.335-11.663-25.997-25.998-25.997   c-14.336,0-25.999,11.662-25.999,25.997C342.542,238.936,354.205,250.6,368.54,250.6z M368.54,213.602   c6.065,0,10.998,4.934,10.998,10.997c0,6.066-4.934,11.001-10.998,11.001c-6.064,0-10.999-4.934-10.999-11.001   C357.542,218.536,362.476,213.602,368.54,213.602z"/></g></svg>'

//ALL BELOW IS BASIC STUFF EVERY PAGE NEEDS

//makes header
header.innerHTML = pineTreeHTML + "The Log Cabin" + mountainHTML

//makes UL

let navList = document.createElement('ul');

let navItems = ['Home', 'Menu', 'Reservations', 'Contact Us'];

navItems.forEach((item) =>{
    let li = document.createElement('li');
    li.innerText = item;
    navList.appendChild(li)
})

navigation.appendChild(navList)


//ALL BELOW IS MAIN CONTENT JUNK
mainContent.textContent = 'j'
