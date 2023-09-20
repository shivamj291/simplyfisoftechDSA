function findRoute(tickets) {
    const ticketMap = new Map();
    const visited = new Set();
    const route = [];
  
    
    for (const ticket of tickets) {
      const [from, to] = ticket.split("-");
      ticketMap.set(from, to);
    }
  
    let currentCity = "Kiev"; 
  
    while (ticketMap.has(currentCity)) {
      route.push(currentCity);
      visited.add(currentCity);
  
      const nextCity = ticketMap.get(currentCity);
  
      if (visited.has(nextCity)) {

        break;
      }
      
      currentCity = nextCity;
    }

    route.push(currentCity);
  
    return route;
  }
  
  const tickets = [
    "Paris-Skopje",
    "Zurich-Amsterdam",
    "Prague-Zurich",
    "Barcelona-Berlin",
    "Kiev-Prague",
    "Skopje-Paris",
    "Amsterdam-Barcelona",
    "Berlin-Kiev",
    "Berlin-Amsterdam"
  ];
  
  const route = findRoute(tickets);
  console.log("Route traveled by your son:",route.join(" -> "));
  
  