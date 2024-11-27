const standartPath = 'http://127.0.0.1:5501';

const paths = [
    {
        path: '',
        createFunc: createMainPage
    },
    {
        path: 'contacts',
        createFunc: ContactsPage
    },
    {
        path: 'catalog',
        createFunc: CatalogPage
    },
        
]


function checkPathAndRenderPage() {
    const pagePath = new URLSearchParams(window.location.search).get('page');
    paths.forEach(elem => {
        if(pagePath === elem.path) elem.createFunc()
            else paths[0].createFunc()
    });
    
}

checkPathAndRenderPage()
