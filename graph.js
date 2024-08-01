function createGraph(cities, highlightedPath = []) {
    const nodes = [];
    const links = [];

    for (const city in cities) {
        nodes.push({ id: city });
        for (const neighbor in cities[city]) {
            links.push({ source: city, target: neighbor, distance: cities[city][neighbor] });
        }
    }

    const filteredLinks = links.filter(link =>
        highlightedPath.some(path => 
            (path.source === link.source && path.target === link.target) ||
            (path.source === link.target && path.target === link.source)
        )
    );
    

    const width = 1000;
    const height = 1200;

    const svg = d3.select("#graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

        const positions = {
            "Ariyalur": { "x": 660, "y": 510 },
            "Chengalpattu": { "x": 820, "y": 200 },
            "Chennai": { "x": 865, "y": 117 },
            "Coimbatore": { "x": 170, "y": 550 },
            "Cuddalore": { "x": 750, "y": 420 },
            "Dharmapuri": { "x": 400, "y": 320 },
            "Dindigul": { "x": 320, "y": 690 },
            "Erode": {"x": 300, "y": 420 },
            "Kallakurichi": { "x": 590, "y": 420},
            "Kanchipuram": { "x": 780, "y": 160 },
            "Kanniyakumari": { "x": 260, "y": 1150 },
            "Karur": { "x": 400, "y": 580 },
            "Krishnagiri": { "x": 390, "y": 210 },
            "Madurai": { "x": 380, "y": 780 },
            "Mayiladuthurai": { "x": 770, "y": 530 },
            "Nagapattinam": { "x": 770, "y": 630 },
            "Namakkal": {"x": 410, "y": 500},
            "Nilgiris": { "x": 120, "y": 460 },
            "Perambalur": { "x": 590, "y": 500 },
            "Pudukkottai": { "x": 580, "y": 680  },
            "Ramanathapuram": { "x": 530, "y": 900},
            "Ranipet": { "x": 700, "y": 145},
            "Salem": { "x": 400, "y": 400 },
            "Sivagangai": {  "x": 530, "y": 780  },
            "Tenkasi": { "x": 245, "y": 980 },
            "Thanjavur": { "x": 620, "y": 610  },
            "Theni": { "x": 270, "y": 780 },
            "Thoothukudi": { "x": 400, "y": 1000 },
            "Tiruchirappalli": { "x": 530, "y": 570},
            "Tirunelveli": { "x": 310, "y":1050 },
            "Tirupattur": { "x": 530, "y": 220 },
            "Tiruppur": { "x": 280, "y": 600 },
            "Tiruvallur": { "x": 817, "y": 90 },
            "Tiruvannamalai": { "x": 640, "y": 250  },
            "Tiruvarur": { "x": 710, "y": 610 },
            "Vellore": { "x": 600, "y": 145},
            "Viluppuram": {"x": 720, "y": 320 },
            "Virudhunagar": { "x": 340, "y": 880 }
        };
        
        

    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(filteredLinks)
        .enter().append("line")
        .attr("stroke-width", d => highlightedPath.some(p => (p.source === d.source && p.target === d.target) || (p.source === d.target && p.target === d.source)) ? 3 : 1)
        .attr("stroke", d => highlightedPath.some(p => (p.source === d.source && p.target === d.target) || (p.source === d.target && p.target === d.source)) ? "red" : "#999");

    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("r", 5)
        .attr("fill", "blue");

    const text = svg.append("g")
        .attr("class", "texts")
        .selectAll("text")
        .data(nodes)
        .enter().append("text")
        .attr("dy", -12)
        .attr("text-anchor", "middle")
        .attr("font-size", "15px")
        .attr("fill", "black")
        .text(d => d.id);

    link
        .attr("x1", d => positions[d.source].x)
        .attr("y1", d => positions[d.source].y)
        .attr("x2", d => positions[d.target].x)
        .attr("y2", d => positions[d.target].y);

    node
        .attr("cx", d => positions[d.id].x)
        .attr("cy", d => positions[d.id].y);

    text
        .attr("x", d => positions[d.id].x)
        .attr("y", d => positions[d.id].y);
}
