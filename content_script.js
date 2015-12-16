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

    // Trump section
    v = v.replace(/\bdonaldjtrump.com\b/g, "Giantwalkingasshole.com");
    v = v.replace(/\bdonaldtrump.com\b/g, "Giantwalkingasshole.com");
    v = v.replace(/\bDonaldTrumps\b/g, "Giant walking asshole");
    v = v.replace(/\bdonaldtrumps\b/g, "Giant walking asshole");
    v = v.replace(/\bDonald Trump\b/g, "Giant walking asshole");
    v = v.replace(/\bdonald trump\b/g, "Giant walking asshole");
    v = v.replace(/\brealDonaldTrump\b/g, "Racist Idiot");
    v = v.replace(/\bTrump\b/g, "Racist Idiot");
    v = v.replace(/\btrump\b/g, "Racist Idiot");
    v = v.replace(/\bTrumps\b/g, "Racist Idiots");
    v = v.replace(/\bTrump2016\b/g, "fail2016");
    
    // Cruz Section
    v = v.replace(/\bTed Cruz\b/g, "village idiot");
    v = v.replace(/\bted cruz\b/g, "village idiot");
    v = v.replace(/\bCruz\b/g, "village idiot");
    v = v.replace(/\bcruz\b/g, "village idiot");
    
    // Bush section
    v = v.replace(/\bJeb Bush\b/g, "Another Rich White Texan");
    v = v.replace(/\bjeb bush\b/g, "Another Rich White Texan");
    v = v.replace(/\bJeb\b/g, "Another Rich White Texan");
    v = v.replace(/\bjeb\b/g, "Another Rich White Texan");
    
    //GOP
    v = v.replace(/\bGOP\b/g, "Council of Fools");
    v = v.replace(/\bgop\b/g, "Council of Fools");
    
    //Republican
    v = v.replace(/\bRepublican Party\b/g, "Nitwit Circle Jerk Party");
    v = v.replace(/\brepublican party\b/g, "Nitwit Circle Jerk Party");
    v = v.replace(/\bRepublicans Party\b/g, "Nitwit Circle Jerk Party");
    v = v.replace(/\brepublicans party\b/g, "Nitwit Circle Jerk Party");
    v = v.replace(/\bRepublican\b/g, "Nitwit");
    v = v.replace(/\bRepublicans\b/g, "Nitwits");
    v = v.replace(/\brepublican\b/g, "nitwit");
    v = v.replace(/\brepublicans\b/g, "nitwits");
    
    // Rubio
    v = v.replace(/\bMarco Rubio\b/g, "Irrelevant Man");
    v = v.replace(/\bmarco rubio\b/g, "irrelevant man");
    v = v.replace(/\brubio\b/g, "irrelevant man");
    v = v.replace(/\bRubio\b/g, "Irrelevant Man");
    
    //Cristie
    v = v.replace(/\bChris Christie\b/g, "Some guy from Jersy");
    v = v.replace(/\bchris christie\b/g, "Some guy from Jersy");
    v = v.replace(/\bChristie\b/g, "Some guy from Jersy");
    v = v.replace(/\bchristie\b/g, "Some guy from Jersy");
    
    //Democrats
    v = v.replace(/\bDemocrats Party\b/g, "Hippie drum circle");
    v = v.replace(/\bdemocrats party\b/g, "Hippie drum circle");
    v = v.replace(/\bDemocrat Party\b/g, "Hippie drum circle");
    v = v.replace(/\bdemocrat party\b/g, "Hippie drum circle");
    v = v.replace(/\bDemocrats\b/g, "Hippies");
    v = v.replace(/\bdemocrats\b/g, "hippies");
    v = v.replace(/\bDemocrat\b/g, "Hippie");
    v = v.replace(/\bdemocrat\b/g, "hippie");
    v = v.replace(/\bdems\b/g, "hippie");
    
    // Hilary
    v = v.replace(/\bHillary Clinton\b/g, "Crazy Lady");
    v = v.replace(/\bhillary clinton\b/g, "Crazy Lady");
    v = v.replace(/\bClinton\b/g, "Crazy Lady");
    v = v.replace(/\bclinton\b/g, "Crazy Lady");
    v = v.replace(/\bClintons\b/g, "Crazy Lady");
    v = v.replace(/\bclintons\b/g, "Crazy Lady");
    v = v.replace(/\bHillary\b/g, "Crazy Lady");
    v = v.replace(/\bhillary\b/g, "Crazy Lady");
    v = v.replace(/\bHillarys\b/g, "Crazy Lady");
    v = v.replace(/\bhillarys\b/g, "Crazy Lady");
    
    // More to come when or feel free to add your own
    
    textNode.nodeValue = v;
}
