'use strict'

function convert()
{
    let xml = localStorage.getItem("bookstore_xml")
    console.log(xml);
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(xml, "text/xml");
    let root = xmlDoc.documentElement;
    
    let jsonLibri = [];
    for(let book of root.children)
    {
        let jsonLibro = {};
        for(let campo of book.children)
        {
            switch(campo.tagName)
            {
                case "title":
                    let titolo = campo.textContent;
                    jsonLibro["title"] = titolo;
                    if(campo.hasAttribute("lang"))
                        jsonLibro["lang"] = campo.getAttribute("lingua");

                    break;
                case "price":
                    jsonLibro["prezzo"] = campo.textContent; break;
                case "author":
                    jsonLibro["author"] = campo.textContent; break;
                case "year":
                    jsonLibro["anno"] = campo.textContent; break;
            }
        }
    }

}