walk(document.body);

function walk(node)
{
    // I borrowed this function from here:
    // http://is.gd/mwZp7E
    
    var child, next;
    
    switch ( node.nodeType )
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
            
        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode)
{
    var v = textNode.nodeValue;
    
    v = v.replace(/\bDonald Trump\b/g, "Giant walking asshole");
    v = v.replace(/\bDonald Trumps\b/g, "Giant walking asshole");
    v = v.replace(/\bTrump\b/g, "Racist Idiot");
    v = v.replace(/\btrump\b/g, "Racist Idiot");
    v = v.replace(/\brealDonaldTrump\b/g, "Racist Idiot");
    v = v.replace(/\bTrumps\b/g, "Racist Idiots");
    v = v.replace(/\bTrump2016\b/g, "fail2016");
    v = v.replace(/\bDonaldTrump\b/g, "Giant walking asshole");
    v = v.replace(/\bdonaldtrump\b/g, "Giant walking asshole");
    v = v.replace(/\bdonaldtrump.com\b/g, "Giantwalkingasshole.com");
    v = v.replace(/\bdonaldjtrump.com\b/g, "Giantwalkingasshole.com");
    v = v.replace(/\bDonald Trump\b/g, "Giant walking asshole");
    
    v = v.replace(/\bTed Cruz\b/g, "village idiot");
    v = v.replace(/\bted cruz\b/g, "village idiot");
    v = v.replace(/\bCruz\b/g, "village idiot");
    v = v.replace(/\bcruz\b/g, "village idiot");
    
    v = v.replace(/\bJeb Bush\b/g, "Another Rich White Texan");
    v = v.replace(/\bjeb bush\b/g, "Another Rich White Texan");
    v = v.replace(/\bJeb\b/g, "Another Rich White Texan");
    v = v.replace(/\bjeb\b/g, "Another Rich White Texan");
    
    v = v.replace(/\bGOP\b/g, "Council of Fools");
    v = v.replace(/\bgop\b/g, "Council of Fools");
    
    v = v.replace(/\bRepublican\b/g, "Nitwit");
    v = v.replace(/\bRepublicans\b/g, "Nitwits");
    v = v.replace(/\bRepublican Party\b/g, "Nitwit Circle Jerk Party");
    v = v.replace(/\brepublican\b/g, "nitwit");
    v = v.replace(/\brepublicans\b/g, "nitwits");
    
    v = v.replace(/\bMarco Rubio\b/g, "Irrelevant Man");
    v = v.replace(/\bmarco rubio\b/g, "irrelevant man");
    v = v.replace(/\brubio\b/g, "irrelevant man");
    v = v.replace(/\bRubio\b/g, "Irrelevant Man");
    
    v = v.replace(/\bChris Christie\b/g, "Some guy from Jersy");
    v = v.replace(/\bchris christie\b/g, "Some guy from Jersy");
    v = v.replace(/\bChristie\b/g, "Some guy from Jersy");
    v = v.replace(/\bchristie\b/g, "Some guy from Jersy");
    
    textNode.nodeValue = v;
}
