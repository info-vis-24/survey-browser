﻿define({
  entries: {
    Abello2013Modular: {
      abstract:
        "Large dynamic networks are targets of analysis in many fields. Tracking temporal changes at scale in these networks is challenging due in part to the fact that small changes can be missed or drowned-out by the rest of the network. For static networks, current approaches allow the identification of specific network elements within their context. However, in the case of dynamic networks, the user is left alone with finding salient local network elements and tracking them over time. In this work, we introduce a modular DoI specification to flexibly define what salient changes are and to assign them a measure of their importance in a time-varying setting. The specification takes into account neighborhood structure information, numerical attributes of nodes/edges, and their temporal evolution. A tailored visualization of the DoI specification complements our approach. Alongside a traditional node-link view of the dynamic network, it serves as an interface for the interactive definition of a DoI function. By using it to successively refine and investigate the captured details, it supports the analysis of dynamic networks from an initial view until pinpointing a user's analysis goal. We report on applying our approach to scientific co-authorship networks and give concrete results for the DBLP dataset.",
      address: 'Los Alamitos, CA, USA',
      author:
        'Abello, James and Hadlak, Steffen and Schumann, Heidrun and Schulz, Hans-J\\"org',
      doi: '10.1109/TVCG.2013.109',
      issn: '1077-2626',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:technique, paradigm:node-link, time:animation, evaluation:case\\_study, application:document, force-directed\\_layout, network\\_metrics, online_problem, special-purpose_layout, compound_graph',
      number: '3',
      pages: '337--350',
      publisher: 'IEEE Computer Society',
      references: 'Farrugia2011Effective Frishman2008Online Reitz2009Focused',
      series: 'TVCG',
      title:
        'A Modular Degree-of-Interest Specification for the Visual Analysis of Large Dynamic Networks',
      type: 'article',
      volume: '20',
      year: '2013',
    },
    Ahlers2014Replicable: {
      abstract:
        "Monitoring a computer network's security state is a di cult task as network components rarely share their information. The IF-MAP speci fication de fines a client/server-based protocol that enables network components to share security information among each other, which is represented in a graph structure. Visualization of this data is challenging due to the highly dynamic topology and the mapping of logical nodes onto physical devices. Furthermore, data in a MAP server is volatile and there is no standardized way to preserve and review changes or previous states of a MAP graph. The evolution of such a graph, however, embodies valuable information for the analysis of past incidents and attacks on the network infrastructure. In this paper we introduce a software framework to visualize MAP data and propose a solution for the effi cient long-term storage and replication of MAP graphs. We demonstrate how changes in the graph structure between given points in time can be computed and visualized.",
      author:
        'Ahlers, Volker and Heine, Felix and Hellmann, Bastian and Kleiner, Carsten and Renners, Leonard and Rossow, Thomas and Steuerwald, Ralf',
      booktitle:
        'Joint Proceedings of the Fourth International Workshop on Euler Diagrams and the First International Workshop on Graph Visualization in Practice',
      keywords:
        'type:application, application:infrastructure, paradigm:node-link, time:animation, graph_difference, evaluation:none',
      pages: '32--41',
      publisher: 'CEUR-WS.org',
      references: 'Federico2011Visual Dutot2007GraphStream',
      series: 'GraphViP',
      title:
        'Replicable Security Monitoring: Visualizing Time-Variant Graphs of Network Metadata',
      type: 'inproceedings',
      url: 'http://ceur-ws.org/Vol-1244/GViP-paper1.pdf',
      year: '2014',
    },
    Ahmed2010Visual: {
      abstract:
        'In this paper, we present new visual analysis methods for history of the FIFA World Cup competition data, a social network from Graph Drawing 2006 Competition. Our methods are based on the use of network analysis method, and new visualization methods for dynamic graphs with dynamic hierarchy and geographic clustering. More specifically, we derive a dynamic network with geographic clustering from the history of the FIFA World Cup competition data, based on who-beats-whom relationship. Combined with the centrality analysis (which defines dynamic hierarchy) and the use of the union of graphs (which determines the overall layout topology), we present three new visualization methods for dynamic graphs with dynamic hierarchy and geographic clustering: wheel layout, radial layout and hierarchical layout. Our experimental results show that our visual analysis methods can clearly reveal the overall winner of the World Cup competition history as well as the strong and weak countries. Furthermore, one can analyze and compare the performance of each country for each year along the context with their overall performance. This enables us to confirm the expected and discover the unexpected.',
      author:
        'Ahmed, Adel and Fu, Xiaoyan and Hong, Seok-Hee and Nguyen, Quan Hoang and Xu, Kai',
      booktitle: 'Visual Information Communication',
      doi: '10.1007/978-1-4419-0312-9_2',
      keywords:
        'type:application, time:timeline, paradigm:node-link, compound_graph, evaluation:case_study, application:sports, 3d, clustering, superimposed_node-link, radial',
      pages: '25--39',
      publisher: 'Springer',
      references:
        'Brandes2006Affiliation Dwyer2004Visualising Fu2007Visualization Misue1995Layout Moody2005Dynamic',
      series: 'VINCI',
      title:
        'Visual analysis of history of {World Cup}: A dynamic network with dynamic hierarchy and geographic clustering',
      type: 'incollection',
      year: '2010',
    },
    Ahn2011Temporal: {
      abstract:
        'Information visualization is a powerful tool for analyzing the dynamic nature of social communities. Using Nation of Neighbors community network as a testbed, we propose five principles of implementing temporal visualizations for social networks and present two research prototypes: NodeXL and TempoVis. Three different states are defined in order to visualize the temporal changes of social networks. We designed the prototypes to show the benefits of the proposed ideas by letting users interactively explore temporal changes of social networks.',
      author:
        'Ahn, Jae-wook and Taieb-Maimon, Meirav and Sopan, Awalin and Plaisant, Catherine and Shneiderman, Ben',
      booktitle:
        'Social Computing, Behavioral-Cultural Modeling and Prediction',
      doi: '10.1007/978-3-642-19656-0_43',
      keywords:
        'paradigm:node-link, application:social, type:application, time:animation, time:timeline, evaluation:expert, directed_graph',
      pages: '309--316',
      publisher: 'Springer',
      references: 'Kang2007Visual Moody2005Dynamic',
      series: 'SBP',
      title:
        'Temporal Visualization of Social Network Dynamics: Prototypes for Nation of Neighbors',
      type: 'incollection',
      year: '2011',
    },
    Ahn2013Task: {
      abstract:
        'Visualization has proven to be a useful tool for understanding network structures. Yet the dynamic nature of social media networks requires powerful visualization techniques that go beyond static network diagrams. In order to provide strong temporal network visualization tools, designers need to understand what tasks the users have to accomplish. This paper describes a taxonomy of temporal network visualization tasks. We identify the (1) entities, (2) properties, and (3) temporal features, which were extracted by surveying 53 existing temporal network visualization systems. By building and examining the task taxonomy, we report which tasks are well covered by existing systems and make suggestions for designing future visualization tools. The feedback from 12 network analysts helped refine the taxonomy.',
      author: 'Ahn, Jae-wook and Plaisant, Catherine and Shneiderman, Ben',
      doi: '10.1109/TVCG.2013.238',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:evaluation, taxonomy, tasks, evaluation:expert, time:generic, evaluation_framework, paradigm:generic, application:generic',
      number: '3',
      pages: '365--376',
      references:
        'Yi2010TimeMatrix Hadlak2011Situ Moody2005Dynamic Bender-deMoll2006Science Brandes2003Visual',
      series: 'TVCG',
      title: 'A Task Taxonomy for Network Evolution Analysis',
      type: 'article',
      volume: '20',
      year: '2013',
    },
    Alencar2012TimeAware: {
      abstract:
        'Scientific articles are the major mechanism for researchers to report their results, and a collection of papers on a discipline can reveal a lot about its evolution, such as the emergence of new topics. Nonetheless, given a broad collection of papers it is typically very difficult to grasp important information that could help readers to globally interpret, navigate and then focus on the relevant items for their task. Content-based document maps are visual representations created from evaluating the (dis)similarity amongst the documents, and have been shown to support exploratory tasks in this scenario. Documents are represented by visual markers placed in the 2D space so that documents close share similar content. Albeit the maps allow visually identifying groups of related documents and frontiers between groups, they do not explicitly convey the temporal evolution of a collection. We propose a technique for creating content-based similarity maps of document collections that highlight temporal changes along time. Our solution constructs a sequence of maps from time-stamped sub-sets of the data. It adopts a cumulative backwards strategy to preserve user context across successive time-stamps, i.e., maps do not change drastically from one time stamp to the next, favouring user perception of changes.',
      author:
        'Alencar, Aretha B and B\\"orner, Katy and Paulovich, Fernando V and de Oliveira, Maria Cristina F',
      booktitle:
        'Proceedings of the 27th Annual ACM Symposium on Applied Computing',
      doi: '10.1145/2245276.2245469',
      keywords:
        'paradigm:node-link, application:document, type:application, time:animation, evaluation:case_study',
      pages: '997--1004',
      publisher: 'ACM',
      references: 'Chen2006CiteSpace',
      series: 'SAC',
      title: 'Time-Aware Visualization of Document Collections',
      type: 'inproceedings',
      year: '2012',
    },
    Archambault2011Animation: {
      abstract:
        'In this paper, we present the results of a human-computer interaction experiment that compared the performance of the animation of dynamic graphs to the presentation of small multiples and the effect that mental map preservation had on the two conditions. Questions used in the experiment were selected to test both local and global properties of graph evolution over time. The data sets used in this experiment were derived from standard benchmark data sets of the information visualization community. We found that small multiples gave significantly faster performance than animation overall and for each of our five graph comprehension tasks. In addition, small multiples had significantly more errors than animation for the tasks of determining sets of nodes or edges added to the graph during the same timeslice, although a positive time-error correlation coefficient suggests that, in this case, faster responses did not lead to more errors. This result suggests that, for these two tasks, animation is preferable if accuracy is more important than speed. Preserving the mental map under either the animation or the small multiples condition had little influence in terms of error rate and response time.',
      author: 'Archambault, Daniel and Purchase, Helen C and Pinaud, Bruno',
      doi: '10.1109/tvcg.2010.78',
      issn: '1077-2626',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'mental\\_map, type:evaluation, paradigm:node-link, time:animation, time:timeline, application:generic, evaluation:user\\_study',
      number: '4',
      pages: '539--552',
      publisher: 'IEEE',
      references:
        'Brandes2003Visual Cohen1992Framework Frishman2004Dynamic Frishman2008Online Kumar2006Visual Lee2006Mental Misue1995Layout Saffrey2008Mental',
      series: 'TVCG',
      title:
        'Animation, Small Multiples, and the Effect of Mental Map Preservation in Dynamic Graphs',
      type: 'article',
      volume: '17',
      year: '2011',
    },
    Archambault2011Difference: {
      abstract:
        'Difference maps are one way to show changes between timeslices in a dynamic graph. They highlight, using colour, the nodes and edges that were added, removed, or persisted between every pair of adjacent timeslices. Although some work has used difference maps for visualization, no user study has been performed to gauge their performance. In this paper, we present a user study to evaluate the effectiveness of difference maps in comparison with presenting the evolution of the dynamic graph over time on three interfaces. We found evidence that difference maps produced significantly fewer errors when determining the number of edges inserted or removed from a graph as it evolves over time. Also, difference maps were significantly preferred on all tasks.',
      author: 'Archambault, Daniel and Purchase, Helen C and Pinaud, Bruno',
      booktitle: 'Graph Drawing',
      doi: '10.1007/978-3-642-18469-7\\_5',
      isbn: '978-3-642-18468-0',
      keywords:
        'paradigm:node-link, type:evaluation, application:social, time:timeline, time:animation, evaluation:user\\_study, graph\\_difference',
      pages: '50--61',
      publisher: 'Springer',
      references:
        'Archambault2011Animation Cohen1992Framework Farrugia2011Effective Frishman2008Online Saffrey2008Mental',
      series: 'GD',
      title: 'Difference Map Readability for Dynamic Graphs',
      type: 'incollection',
      year: '2011',
    },
    Archambault2012Mental: {
      abstract:
        "In dynamic graph drawing, preserving the mental map, or ensuring that the location of nodes do not change significantly as the information evolves over time is considered an important property by algorithm designers. Many prior experiments have attempted to verify this principle, with surprisingly little success. These experiments have used several different algorithmic methods, a variety of graph interpretation questions on both real and fabricated data, and different presentation methods. However, none of the results have conclusively demonstrated the importance of mental map preservation on task performance. Our experiment measures the efficacy of the dynamic graph drawing in a different manner: we look at how memorable the evolving graph is, rather than how easy it is to interpret. As observed in the previous studies, we found no significant difference in terms of response time or error rate when preserving the mental map. While preserving the mental map is a good idea in principle, we find that it may not always support performance. However, our qualitative data suggests that, in terms of the user's perception, preserving the mental map makes memorability tasks easier. Our qualitative data also suggests that there may be two features of the dynamic graph drawing that may assist in their memorability: interesting subgraphs that remain visible over time and interesting patterns in node movement. The former is supported by preserving the mental map while the latter is not.",
      author: 'Archambault, Daniel and Purchase, Helen C',
      booktitle: 'Proceeding of the IEEE Pacific Visualization Symposium',
      doi: '10.1109/PacificVis.2012.6183578',
      keywords:
        'mental\\_map, paradigm:node-link, type:evaluation, time:animation, application:social, evaluation:user_study',
      pages: '89--96',
      publisher: 'IEEE',
      references:
        'Archambault2011Animation Cohen1992Framework Farrugia2011Effective Frishman2008Online Lee2006Mental Misue1995Layout Saffrey2008Mental Zaman2011Effect',
      series: 'PacificVis',
      title: 'The Mental Map and Memorability in Dynamic Graphs',
      type: 'inproceedings',
      year: '2012',
    },
    Archambault2013Map: {
      abstract:
        'Abstract Preserving the mental map is frequently cited by dynamic graph drawing algorithm designers as an important optimization criterion. There have been a number of definitions for mental map preservation and many different algorithmic approaches to drive dynamic graph drawing to satisfy these definitions. One of the most frequently used definitions is that of Coleman and Parker where \u201cthe placement of existing nodes and edges should change as little as possible when a change is made to the graph.\u201d A number of experiments have been run to test the effectiveness of this definition from a usability perspective. To date, no experiment has found conclusive evidence that supports the effectiveness of the mental map in the comprehension of a dynamic graph series. In this paper, we summarize the experiments conducted on this definition of mental map preservation and provide recommendations to designers and researchers to fully understand when the mental map supports user tasks.',
      author: 'Archambault, Daniel and Purchase, Helen C',
      doi: '10.1016/j.ijhcs.2013.08.004',
      journal: 'International Journal of Human-Computer Studies',
      keywords:
        'type:evaluation, paradigm:node-link, time:animation, evaluation:survey, application:generic, mental_map, aesthetic_criteria',
      number: '11',
      pages: '1044 - 1055',
      references:
        'Archambault2012Mental Archambault2011Animation Bender-deMoll2006Science Brandes2012Visualization Burch2011Parallel Cohen1992Framework Farrugia2011Effective Frishman2004Dynamic Frishman2008Online Lee2006Mental Misue1995Layout Moody2005Dynamic Saffrey2008Mental',
      title:
        'The ``{Map}" in the mental map: Experimental results in dynamic graph drawing',
      type: 'article',
      volume: '71',
      year: '2013',
    },
    Archambault2013Mental: {
      abstract:
        'We present the results of a formal experiment that tests the ability of a participant to orient themselves in a dynamically evolving graph. Examples of these tasks include finding a specific location or route between two locations. We find that preserving the mental map for the tasks tested is significantly faster and produces fewer errors. As the number of targets increase, this result holds.',
      author: 'Archambault, Daniel and Purchase, Helen C',
      booktitle: 'Graph Drawing',
      doi: '10.1007/978-3-642-36763-2_42',
      keywords:
        'type:evaluation, paradigm:node-link, time:animation, mental_map, evaluation:user_study, application:generic, time:timeline',
      organization: 'Springer',
      pages: '475--486',
      references:
        'Archambault2012Mental Archambault2011Animation Brandes2012Visualization Farrugia2011Effective Frishman2008Online Ghani2012Perception Misue1995Layout Saffrey2008Mental',
      series: 'GD',
      title: 'Mental map preservation helps user orientation in dynamic graphs',
      type: 'inproceedings',
      year: '2013',
    },
    Archambault2014Application: {
      author: 'Archambault, Daniel and Purchase, Helen C',
      booktitle:
        'Joint Proceedings of the Fourth International Workshop on Euler Diagrams and the First International Workshop on Graph Visualization in Practice',
      keywords:
        'evaluation:survey, type:evaluation, time:animation, time:timeline, paradigm:node-link, application:generic, mental_map, juxtaposed_node-link',
      pages: '73--77',
      publisher: 'CEUR-WS.org',
      references:
        'Archambault2012Mental Archambault2013Map Archambault2011Animation Bach2014Review Bach2014GraphDiaries Beck2014State Farrugia2011Effective Ghani2012Perception Misue1995Layout Rufiange2013DiffAni',
      series: 'GraphViP',
      title:
        'On the Application of Experimental Results in Dynamic Graph Drawing',
      type: 'inproceedings',
      url: 'http://ceur-ws.org/Vol-1244/GViP-paper5.pdf',
      year: '2014',
    },
    Archambault2014Temporal: {
      abstract:
        'Networks that evolve over time, or dynamic graphs, have been of interest to the areas of information visualization and graph drawing for many years. Typically, its the structure of the dynamic graph that evolves as vertices and edges are added or removed from the graph. In a multivariate scenario, however, attributes play an important role and can also evolve over time. In this chapter, we characterize and survey methods for visualizing temporal multivariate networks. We also explore future applications and directions for this emerging area in the fields of information visualization and graph drawing.',
      author:
        'Archambault, Daniel and Abello, James and Kennedy, Jessie and Kobourov, Stephen G and Ma, Kwan-Liu and Miksch, Silvia and Muelder, Chris and Telea, Alexandru',
      booktitle: 'Multivariate Network Visualization',
      chapter: '8',
      doi: '10.1007/978-3-319-06793-3_8',
      keywords:
        'type:evaluation, time:generic, paradigm:node-link, evaluation:survey, application:software_engineering, mental_map, application:generic, multivariate_graph, taxonomy',
      pages: '151--175',
      publisher: 'Springer',
      references:
        'Abello2013Modular Archambault2013Map Archambault2011Animation Bastian2009Gephi Bender-deMoll2006Science Boitmanis2008Visualizing Brandes2012Visualization Brandes1997Bayesian Burch2011Parallel Collberg2003System Dwyer2004Visualising Erten2004Exploring Farrugia2011Effective Feng2012Coherent Forrester2005graphael Frishman2008Online Hu2012Embedding Kumar2006Visual Mashima2012Visualizing Moody2005Dynamic Rufiange2013DiffAni Saffrey2008Mental Sallaberry2012Clustering',
      title: 'Temporal Multivariate Networks',
      type: 'incollection',
      year: '2014',
    },
    Archambault2015Animation: {
      abstract:
        'Animation and small multiples are methods for visualising dynamically evolving graphs. Animations present an interactive movie of the data where positions of nodes are smoothly interpolated as the graph evolves. Nodes fade in/out as they are added/removed from the data set. Small multiples presents the data like a comic book with the graph at various states in separate windows. The user scans these windows to see how the data evolves. In a recent experiment, drawing stability (known more widely as the \u201cmental map\u201d) was shown to help users follow specific nodes or long paths in dynamically evolving data. However, no significant difference between animation and small multiples presentations was found. In this paper, we look at data where the nodes in the graph have low drawing stability and analyse it with new error metrics: measuring how close the given answer is from the correct answer on a continuous scale. We find evidence that when the stability of the drawing is low and important nodes in the task cannot be highlighted throughout the time series, animation can improve task performance when compared to the use of small multiples.',
      author: 'Archambault, Daniel and Purchase, Helen C',
      doi: '10.1016/j.ins.2015.04.017',
      journal: 'Information Sciences',
      keywords:
        'paradigm:node-link, time:animation, time:timeline, evaluation:user_study, mental_map, application:generic, juxtaposed_node-link, type:evaluation',
      publisher: 'Elsevier',
      references:
        'Archambault2012Mental Archambault2013Map Archambault2011Animation Bach2014GraphDiaries Brandes2012Visualization Burch2011Parallel Farrugia2011Effective Frishman2004Dynamic Frishman2008Online Ghani2012Perception Misue1995Layout Rufiange2013DiffAni Zaman2011Effect',
      title: 'Can animation support the visualisation of dynamic graphs?',
      type: 'article',
      year: '2015',
    },
    Arendt2014SVEN: {
      abstract:
        'Graphs change over time, and typically variations on the small multiples or animation pattern is used to convey this dynamism visually. However, both of these classical techniques have significant drawbacks, so a new approach, Storyline Visualization of Events on a Network (SVEN) is proposed. SVEN builds on storyline techniques, conveying nodes as contiguous lines over time. SVEN encodes time in a natural manner, along the horizontal axis, and optimizes the vertical placement of storylines to decrease clutter (line crossings, straightness, and bends) in the drawing. This paper demonstrates SVEN on several different flavors of real-world dynamic data, and outlines the remaining near-term future work.',
      author: 'Arendt, Dustin L and Blaha, Leslie M',
      journal: 'arXiv preprint arXiv:1412.6706',
      keywords:
        'type:technique, time:timeline, paradigm:node-link, juxtaposed_node-link, evaluation:case_study, linear_arrangement, application:social, application:sports, application:document',
      references:
        'Archambault2011Animation Bastian2009Gephi Bender-deMoll2006Science Brandes2003Visual Burch2011Parallel Chen2006CiteSpace Dwyer2002Visualising Moody2005Dynamic Purchase2007Important Shi2011Dynamic',
      title:
        '{SVEN}: Informative Visual Representation of Complex Dynamic Structure',
      type: 'article',
      url: 'http://xxx.tau.ac.il/abs/1412.6706',
      year: '2014',
    },
    Bach2014GraphDiaries: {
      abstract:
        'Identifying, tracking and understanding changes in dynamic networks are complex and cognitively demanding tasks. We present GraphDiaries, a visual interface designed to improve support for these tasks in any node-link based graph visualization system. GraphDiaries relies on animated transitions that highlight changes in the network between time steps, thus helping users identify and understand those changes. To better understand the tasks related to the exploration of dynamic networks, we first introduce a task taxonomy, that informs the design of GraphDiaries, presented afterwards. We then report on a user study, based on representative tasks identified through the taxonomy, and that compares GraphDiaries to existing techniques for temporal navigation in dynamic networks, showing that it outperforms them in terms of both task time and errors for several of these tasks.',
      author: 'Bach, Benjamin and Pietriga, Emmanuel and Fekete, Jean-Daniel',
      doi: '10.1109/TVCG.2013.254',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:technique, time:animation, paradigm:node-link, evaluation:user_study, application:generic, taxonomy, tasks, offline_problem, transition_problem, general-purpose_layout',
      number: '5',
      pages: '740--754',
      publisher: 'IEEE',
      references:
        'Federico2011Visual Farrugia2011Exploring Collberg2003System Dwyer2002Visualising Brandes2003Visual Friedrich2002Graph Archambault2011Animation Farrugia2011Effective Bastian2009Gephi Ahn2011Temporal Ghani2012Perception Zaman2011Effect',
      series: 'TVCG',
      title:
        '{GraphDiaries}: Animated Transitions and Temporal Navigation for Dynamic Networks',
      type: 'article',
      volume: '20',
      year: '2014',
    },
    Bach2014Review: {
      abstract:
        "We review a range of temporal data visualization techniques through a new lens, by describing them as series of operations performed on a conceptual space-time cube. These operations include extracting subparts of a space-time cube, flattening it across space or time, or transforming the cube's geometry or content. We introduce a taxonomy of elementary space-time cube operations, and explain how they can be combined to turn a three-dimensional space-time cube into an easily-readable two-dimensional visualization. Our model captures most visualizations showing two or more data dimensions in addition to time, such as geotemporal visualizations, dynamic networks, time-evolving scatterplots, or videos. We finally review interactive systems that support a range of operations. By introducing this conceptual framework we hope to facilitate the description, criticism and comparison of existing temporal data visualizations, as well as encourage the exploration of new techniques and systems.",
      author:
        'Bach, Benjamin and Dragicevic, Pierre and Archambault, Daniel and Hurter, Christophe and Carpendale, Sheelagh',
      booktitle: 'EuroVis-STARs',
      doi: '10.2312/eurovisstar.20141171',
      keywords:
        'type:evaluation, evaluation:survey, time:generic, paradigm:generic, application:generic',
      pages: '23--41',
      publisher: 'The Eurographics Association',
      references:
        'Archambault2011Animation Ahn2011Temporal Boyandin2012Qualitative Brandes2003Visual Brandes2011Asymmetric Bach2014GraphDiaries Burch2011Parallel Dwyer2002Visualising Dwyer2004Visualising Groh2009Interactively Hurter2013Bundled Rufiange2013DiffAni',
      series: 'EuroVis',
      title:
        'A Review of Temporal Data Visualizations Based on Space-Time Cube Operations',
      type: 'inproceedings',
      year: '2014',
    },
    Bach2014Visualizing: {
      abstract:
        'Designing visualizations of dynamic networks is challenging, both because the data sets tend to be complex and because the tasks associated with them are often cognitively demanding. We introduce the Matrix Cube, a novel visual representation and navigation model for dynamic networks, inspired by the way people comprehend and manipulate physical cubes. Users can change their perspective on the data by rotating or decomposing the 3D cube. These manipulations can produce a range of different 2D visualizations that emphasize specific aspects of the dynamic network suited to particular analysis tasks. We describe Matrix Cubes and the interactions that can be performed on them in the Cubix system. We then show how two domain experts, an astronomer and a neurologist, used Cubix to explore and report on their own network data.',
      author: 'Bach, Benjamin and Pietriga, Emmanuel and Fekete, Jean-Daniel',
      booktitle:
        'Procceedings of the SICCHI Conference on Human Factors in Computing Systems',
      doi: '10.1145/2556288.2557010',
      keywords:
        'type:technique, time:timeline, paradigm:matrix, evaluation:case_study, evaluation:expert, application:infrastructure, application:biology, 3d, layered_matrices, weighted_graph',
      series: 'CHI',
      title: 'Visualizing Dynamic Networks with {Matrix Cubes}',
      type: 'inproceedings',
      year: '2014',
    },
    Bach2015Small: {
      abstract:
        "We introduce MultiPiles, a visualization to explore time-series of dense, weighted networks. MultiPiles is based on the physical analogy of piling adjacency matrices, each one representing a single temporal snapshot. Common interfaces for visualizing dynamic networks use techniques such as: flipping/animation; small multiples; or summary views in isolation. Our proposed 'piling' metaphor presents a hybrid of these techniques, leveraging each one's advantages, as well as offering the ability to scale to networks with hundreds of temporal snapshots. While the MultiPiles technique is applicable to many domains, our prototype was initially designed to help neuroscientists investigate changes in brain connectivity networks over several hundred snapshots. The piling metaphor and associated interaction and visual encodings allowed neuroscientists to explore their data, prior to a statistical analysis. They detected high-level temporal patterns in individual networks and this helped them to formulate and reject several hypotheses.",
      author:
        'Bach, Benjamin and Henry-Riche, Nathalie and Dwyer, Tim and Madhyastha, Tara and Fekete, Jean-Daniel and Grabowski, Thomas',
      doi: '10.1111/cgf.12615',
      journal: 'Computer Graphics Forum',
      keywords:
        'type:technique, time:timeline, time:animation, paradigm:matrix, application:biology, evaluation:expert, weighted_graph, animated_timeline',
      publisher: 'The Eurographics Association and John Wiley & Sons Ltd.',
      references:
        'Archambault2011Animation Ahn2013Task Beck2014State Boyandin2012Qualitative Bach2014Review Brandes2011Asymmetric Bach2014GraphDiaries Burch2014FlipBook Collberg2003System Perer2012MatrixFlow Rufiange2013DiffAni Rufiange2014AniMatrix Stein2010PixelOriented Yi2010TimeMatrix',
      series: 'CGF',
      title:
        '{Small MultiPiles}: Piling Time to Explore Temporal Patterns in Dynamic Networks',
      type: 'article',
      year: '2015',
    },
    Bastian2009Gephi: {
      abstract:
        'Gephi is an open source software for graph and network analysis. It uses a 3D render engine to display large networks in real-time and to speed up the exploration. A flexible and multi-task architecture brings new possibilities to work with complex data sets and produce valuable visual results. We present several key features of Gephi in the context of interactive exploration and interpretation of networks. It provides easy and broad access to network data and allows for spatializing, filtering, navigating, manipulating and clustering. Finally, by presenting dynamic features of Gephi, we highlight key aspects of dynamic network visualization.',
      author: 'Bastian, Mathieu and Heymann, Sebastien and Jacomy, Mathieu',
      booktitle: 'International AAAI Conference on Weblogs and Social Media',
      keywords:
        'type:application, time:animation, paradigm:node-link, evaluation:none, application:generic, online_problem, clustering, network_metrics',
      pages: '361--362',
      publisher: 'The AAAI Press',
      series: 'ICWSM',
      title:
        'Gephi: an open source software for exploring and manipulating networks',
      type: 'inproceedings',
      url: 'http://aaai.org/ocs/index.php/ICWSM/09/paper/view/154',
      year: '2009',
    },
    Baur2008Dynamic: {
      abstract:
        'In early 2008 a new testing branch of the network analysis software visone has been made publicly available [Baur et al., 2008]. This realease includes the ability to process dynamic networks. A central feature is a dedicated dynamic layout algorithm which we present here from a methological and application oriented point of view. We first describe this algorithm from an algorithmic perspective. More precisely we show how the local majorant method of the related layout algorithm given by Kamada and Kawai can be adapted to layout dynamic networks. Following the methodological part we also address some problems and some other features of our implementation. Given the information in this document users of the dynamic layout procedure in visone should be able to employ the various available options efficiently to get the desired results.',
      author: 'Baur, Michael and Schank, Thomas',
      institution: 'Fakult\\"at f\\"ur Informatik, Universit\\"at Karlsruhe',
      issn: '1432-7864',
      keywords:
        'type:technique, paradigm:node-link, time:animation, evaluation:none, offline_problem, application:generic, general-purpose_layout',
      references: 'Friedrich2002Graph Misue1995Layout Moody2005Dynamic',
      title: 'Dynamic Graph Drawing in {Visone}',
      type: 'techreport',
      url: 'http://digbib.ubka.uni-karlsruhe.de/volltexte/1000007990',
      year: '2008',
    },
    Beck2009Aesthetic: {
      abstract:
        'Most research on the readability of graph visualization focuses on node-link diagrams of static graphs. But in many applications graphs are not static, but change over time, or graphs are too dense to be drawn as node-link diagrams. In this paper we look at dynamic graph visualizations: We translate the general goal of graph visualization-to convey the underlying information of a graph-into aesthetic dimensions that are applicable in practice. These aesthetic dimensions help to design, compare, and evaluate dynamic graph visualizations.',
      author: 'Beck, Fabian and Burch, Michael and Diehl, Stephan',
      booktitle:
        'Proceedings of the 13th International Conference on Information Visualisation',
      doi: '10.1109/IV.2009.42',
      keywords:
        'paradigm:generic, time:generic, type:evaluation, aesthetic_criteria, mental_map, evaluation:case\\_study, evaluation_framework, application:document',
      pages: '592--597',
      publisher: 'IEEE',
      references: 'Misue1995Layout',
      series: 'IV',
      title:
        'Towards an Aesthetic Dimensions Framework for Dynamic Graph Visualisations',
      type: 'inproceedings',
      year: '2009',
    },
    Beck2012Rapid: {
      abstract:
        'Rapid Serial Visual Presentation is an effective approach for browsing and searching large amounts of data. By presenting subsequent images at high frequency, we utilize the perceptual abilities of the human visual system to rapidly process certain visual features. While this concept is successfully used in video and image browsing, we demonstrate how it can be applied to dynamic graph visualization. In this paper, we introduce a visualization technique for time-varying graphs that is scalable with respect to the number of time steps. The graph visualization is based on the Parallel Edge Splatting technique, which employs a space-efficient display of a sequence of dynamically changing graphs. To illustrate the usefulness of our approach we analyzed method call graphs recorded during the execution of the open source software system JHotDraw. Furthermore, we studied a time-varying social network representing researchers and their dynamic communication structure while attending the ACM Hypertext 2009 conference.',
      author:
        'Beck, Fabian and Burch, Michael and Vehlow, Corinna and Diehl, Stephan and Weiskopf, Daniel',
      booktitle:
        'Proceedings of the 2012 IEEE Symposium on Visual Languages and Human-Centric Computing',
      doi: '10.1109/vlhcc.2012.6344514',
      keywords:
        'paradigm:node-link, mental\\_map, application:social, application:software\\_engineering, type:technique, compound_graph, directed_graph, weighted_graph, bipartite, evaluation:case\\_study, time:timeline, time:animation, animated_timeline, time_aggregation',
      pages: '185--192',
      publisher: 'IEEE',
      references:
        'Beck2009Aesthetic Burch2008TimeRadarTrees Burch2011Parallel Frishman2008Online Greilich2009Visualizing Misue1995Layout Reitz2009Focused',
      series: 'VL/HCC',
      'survey:data':
        '(n:982, e:32259, t:1077), (n:982, e:1757, t:1757), (n:113, e:20818, t:236)',
      title: 'Rapid Serial Visual Presentation in Dynamic Graph Visualization',
      type: 'inproceedings',
      year: '2012',
    },
    Beck2013Matching: {
      abstract:
        'Mapping a dynamic graph dataset to an inappropriate visualization leads to a degradation of visualization performance at some task. To tap the full potential of existing dynamic graph visualization techniques, we propose a methodology for matching application requirements with dynamic graph visualization profiles. We target at supporting experts choosing the right visualization technique. Our methodology describes both the application requirements and the visualization techniques as profiles covering important aesthetic criteria for visualizing dynamic graphs. Characteristics of the graph and task are used to derive the application profile. The probably most appropriate visualization technique is the one whose profile matches best the required application profile. We compile exemplary visualization profiles for representatives of dynamic graph visualization approaches and demonstrate the methodology in a case study.',
      author: 'Beck, Fabian and Burch, Michael and Diehl, Stephan',
      booktitle:
        'Proceedings of the 17th International Conference on Information Visualisation',
      doi: '10.1109/IV.2013.2',
      keywords:
        'type:evaluation, paradigm:generic, evaluation:case\\_study, application:document, aesthetic_criteria, mental\\_map, taxonomy, time:generic, evaluation_framework, tasks',
      pages: '11--18',
      publisher: 'IEEE',
      references:
        'Beck2009Aesthetic Misue1995Layout Frishman2008Online Burch2011Parallel Greilich2009Visualizing Brandes2011Asymmetric Stein2010PixelOriented Burch2008TimeRadarTrees Beck2012Rapid',
      series: 'IV',
      title:
        'Matching Application Requirements with Dynamic Graph Visualization Profiles',
      type: 'inproceedings',
      year: '2013',
    },
    Beck2014State: {
      abstract:
        "Dynamic graph visualization focuses on the challenge of representing the evolution of relationships between entities in readable, scalable, and effective diagrams. This work surveys the growing number of approaches in this discipline. We derive a hierarchical taxonomy of techniques by systematically categorizing and tagging publications. While static graph visualizations are often divided into node-link and matrix representations, we identify the representation of time as the major distinguishing feature for dynamic graph visualizations: either graphs are represented as animated diagrams or as static charts based on a timeline. Evaluations of animated approaches focus on dynamic stability for preserving the viewer's mental map or, in general, compare animated diagrams to timeline-based ones. Finally, we identify and discuss challenges for future research.",
      author:
        'Beck, Fabian and Burch, Michael and Diehl, Stephan and Weiskopf, Daniel',
      booktitle: 'EuroVis - STARs',
      doi: '10.2312/eurovisstar.20141174',
      keywords:
        'type:evaluation, time:generic, paradigm:generic, evaluation:survey, application:generic',
      pages: '83-103',
      publisher: 'Eurographics Association',
      references:
        'Archambault2014Temporal Alencar2012TimeAware Ahmed2010Visual Abello2013Modular Archambault2012Mental Archambault2013Map Archambault2011Animation Archambault2011Difference Ahn2013Task Ahn2011Temporal Beck2009Aesthetic Beck2013Matching Boyandin2012Qualitative Boitmanis2008Visualizing Burch2014Dynamic Beck2012Rapid Burch2012Radial Brandes2003Visual Burch2008TimeRadarTrees Burch2010TimeSpiderTrees Brasch2012VENLO Brandes2006Dynamic Beyer2006Animated Brandes2006Affiliation Burch2011Layered Brandes2012Visualization Brandes2012Quantitative Burch2012Visualizing Brandes2011Asymmetric Bach2014GraphDiaries Bach2014Visualizing Branke2001Dynamic Burch2013MatrixBased Burch2011Parallel Brandes1997Bayesian Cohen1992Framework Cohen1995Dynamic Chen2006CiteSpace Collberg2003System Cengiz2013Visualization Dwyer2002Visualising Diehl2002Graphs Diehl2001Preserving Erten2004Exploring Erten2004GraphAEL Erten2004Simultaneous Elmqvist2003Causality Federico2011Visual Friedrich2001Marey Friedrich2002Graph Friedrich2002GraphII Farrugia2011Exploring Forrester2005graphael Farrugia2011Effective Frishman2004Dynamic Frishman2008MOVIS Frishman2008Online Feng2012Coherent Greilich2009Visualizing Gorg2005Dynamic Gorochowski2012Using Ghani2012Perception Gansner2013Interactive Greevy2006Visualizing Gaertler2006Hybrid Hurter2013Bundled Huang1998Online Hu2012Embedding Hayashi2013Initial Hadlak2011Situ Itoh2012Visualization Itoh2010Interactive Itoh2012Analysis John2011Constructing Kumar2006Visual Kimelman1995Reduction Kobourov2012Spring Loubier2008Temporal Lee2006Mental Li2013Visual Lin2010ContexTour Liao2013Visual Misue1995Layout Mashima2012Visualizing Moody2005Dynamic Nesbitt2002Applying North1996Incremental Oelke2013Fingerprint Ogawa2008StarGate Ogawa2009codeswarm Pohl2008Interactive Purchase2007Important Purchase2008Extremes Pupyrev2010Analyzing Rey2010Controlling Rufiange2013DiffAni Reitz2009Focused Rohrschneider2010Visual Saraiya2005Visualization Sallaberry2012Clustering Stab2010SemaTime Saffrey2008Mental Stein2010PixelOriented Shi2011Dynamic Toyoda2005System Trier2006Towards Vehlow2013Radial vandenElzen2013Dynamic Vehlow2013iVUN vonLandesberger2013Visual vonLandesberger2011Visual Windhager2011Visual Yang2008Visual Yi2010TimeMatrix Zaman2011Effect',
      series: 'EuroVis',
      title: 'The State of the Art in Visualizing Dynamic Graphs',
      type: 'inproceedings',
      url: 'http://www.visus.uni-stuttgart.de/uploads/tx_vispublications/eurovis14-star.pdf',
      year: '2014',
    },
    'Bender-deMoll2006Science': {
      abstract:
        'If graph drawing is to become a methodological tool instead of an illustrative art, many concerns need to be overcome. We discuss the problems of social network visualization, and particularly, problems of dynamic network visualization. We consider issues that arise from the aggregation of continuous-time relational data ("streaming" interactions) into a series of networks. We discuss our experience developing SoNIA (Social Network Image Animator, http://sonia.stanford.edu) as a prototype platform for testing and comparing layouts and techniques, and as a tool for browsing attribute-rich network data and for animating network dynamics over time. We discuss strengths and weakness of existing layout algorithms and suggest ways to adapt them to sequential layout tasks. As such, we propose a framework for visualizing social networks and their dynamics, and we present a tool that enables debate and reflection on the quality of visualizations used in empirical research.',
      author: 'Bender-deMoll, Skye and McFarland, Daniel A',
      journal: 'Journal of Social Structure',
      keywords:
        'application:social, type:application, time:animation, paradigm:node-link, evaluation:case_study, mental_map, radial',
      number: '2',
      pages: '1--38',
      references: 'Moody2005Dynamic',
      title: 'The Art and Science of Dynamic Network Visualization',
      type: 'article',
      url: 'http://www.cmu.edu/joss/content/articles/volume7/deMollMcFarland/',
      volume: '7',
      year: '2006',
    },
    Beyer2006Animated: {
      abstract:
        "The understanding of the structure of a software system can be improved by analyzing the system's evolution during development. Visualizations of software history that provide only static views do not capture the dynamic nature of software evolution. We present a new visualization technique, the Evolution Storyboard, which provides dynamic views of the evolution of a software's structure. An evolution storyboard consists of a sequence of animated panels, which highlight the structural changes in the system; one panel for each considered time period. Using storyboards, engineers can spot good design, signs of structural decay, or the spread of cross cutting concerns in the code. We implemented our concepts in a tool, which automatically extracts software dependency graphs from version control repositories and computes storyboards based on panels for different time periods. For applying our approach in practice, we provide a step by step guide that others can follow along the storyboard visualizations, in order to study the evolution of large systems. We have applied our method to several large open source software systems. In this paper, we demonstrate that our method provides additional information (compared to static views) on the ArgoUML project, an open source UML modeling tool.",
      author: 'Beyer, Dirk and Hassan, Ahmed E',
      booktitle:
        'Proceedings of the 13th Working Conference on Reverse Engineering',
      doi: '10.1109/wcre.2006.14',
      isbn: '0-7695-2719-1',
      keywords:
        'type:application, paradigm:node-link, time:animation, evaluation:case\\_study, application:software_engineering, software_evolution',
      pages: '199--210',
      publisher: 'IEEE Computer Society',
      references: 'Collberg2003System',
      series: 'WCRE',
      title:
        'Animated Visualization of Software History using {Evolution Storyboards}',
      type: 'inproceedings',
      year: '2006',
    },
    Boitmanis2008Visualizing: {
      abstract:
        'We propose a visualization approach for large dynamic graph structures with high degree variation and low diameter. In particular, we reduce visual complexity by multiple modes of representation in a single-level visualization rather than abstractions of lower levels of detail. This is useful for non-interactive display and eases dynamic layout, which we address in the online scenario. Our approach is illustrated on a family of large networks featuring all of the above structural characteristics, the physical Internet on the autonomous systems level over time.',
      author: 'Boitmanis, Krists and Brandes, Ulrik and Pich, Christian',
      booktitle: 'Graph Drawing',
      doi: '10.1007/978-3-540-77537-9_36',
      keywords:
        'paradigm:node-link, application:infrastructure, type:application, evaluation:case\\_study, time:animation',
      pages: '365--376',
      publisher: 'Springer',
      references: 'Brandes1997Bayesian Diehl2002Graphs Erten2004GraphAEL',
      series: 'GD',
      title: 'Visualizing Internet Evolution on the Autonomous Systems Level',
      type: 'inproceedings',
      year: '2008',
    },
    Boyack2009Mapping: {
      abstract:
        'How does our collective scholarly knowledge grow over time? What major areas of science exist and how are they interlinked? Which areas are major knowledge producers; which ones are consumers? Computational scientometrics \u2014 the application of bibliometric/scientometric methods to large-scale scholarly datasets \u2014 and the communication of results via maps of science might help us answer these questions. This paper represents the results of a prototype study that aims to map the structure and evolution of chemistry research over a 30 year time frame. Information from the combined Science (SCIE) and Social Science (SSCI) Citations Indexes from 2002 was used to generate a disciplinary map of 7,227 journals and 671 journal clusters. Clusters relevant to study the structure and evolution of chemistry were identified using JCR categories and were further clustered into 14 disciplines. The changing scientific composition of these 14 disciplines and their knowledge exchange via citation linkages was computed. Major changes on the dominance, influence, and role of Chemistry, Biology, Biochemistry, and Bioengineering over these 30 years are discussed. The paper concludes with suggestions for future work.',
      author: 'Boyack, Kevin W and B{\\"o}rner, Katy and Klavans, Richard',
      doi: '10.1007/s11192-009-0403-5',
      journal: 'Scientometrics',
      keywords:
        'type:application, time:timeline, paradigm:node-link, evaluation:case_study, application:document',
      number: '1',
      pages: '45--60',
      publisher:
        "Akad{\\'e}miai Kiad{\\'o} co-published with Springer Science+ Business Media BV, Formerly Kluwer Academic Publishers BV",
      references: 'Chen2006CiteSpace',
      title: 'Mapping the structure and evolution of chemistry research',
      type: 'article',
      volume: '79',
      year: '2009',
    },
    Boyandin2012Qualitative: {
      abstract:
        'We present a qualitative user study analyzing findings made while exploring changes over time in spatial interactions. We analyzed findings made by the study participants with flow maps, one of the most popular representations of spatial interactions, using animation and small-multiples as two alternative ways of representing temporal changes. Our goal was not to measure the subjects\u2019 performance with the two views, but to find out whether there are qualitative differences between the types of findings users make with these two representations. To achieve this goal we performed a deep analysis of the collected findings, the interaction logs, and the subjective feedback from the users. We observed that with animation the subjects tended to make more findings concerning geographically local events and changes between subsequent years. With small-multiples more findings concerning longer time periods were made. Besides, our results suggest that switching from one view to the other might lead to an increase in the numbers of findings of specific types made by the subjects which can be beneficial for certain tasks.',
      author: 'Boyandin, Ilya and Bertini, Enrico and Lalanne, Denis',
      doi: '10.1111/j.1467-8659.2012.03093.x',
      journal: 'Computer Graphics Forum',
      keywords:
        'type:evaluation, time:animation, time:timeline, paradigm:node-link, evaluation:user_study, application:social, fixed_nodes, application:geo',
      number: '3pt2',
      pages: '1005--1014',
      publisher: 'Blackwell Publishing Ltd',
      references:
        'Archambault2011Animation Farrugia2011Effective Saffrey2008Mental',
      series: 'CGF',
      title:
        'A Qualitative Study on the Exploration of Temporal Changes in Flow Maps with Animation and Small-Multiples',
      type: 'article',
      volume: '31',
      year: '2012',
    },
    Brandes1997Bayesian: {
      abstract:
        "Dynamic graph layout refers to the layout of graphs that change over time. These changes are due to user interaction, algorithms, or other underlying processes determining the graph. Typically, users spend a noteworthy amount of time to get familiar with a layout, i.e. they build a mental map [ELMS91]. To retain this map at least partially, consecutive layouts of similar graphs should not differ significantly. Still, each of these layouts should adhere to constraints and criteria that have been specified to improve meaning and readability of a drawing. In [BW97], we introduced random field models for graph layout. As a major advantage of this formulation, many different layout models can be represented uniformly by random variables. This uniformity enables us to now present a framework for dynamic layout of arbitrary random field models. Our approach is based on Bayesian decision theory and formalizes common sense procedures. Example applications of our framework are dynamic versions of two well-known layout models: Eades' spring embedder [Ead84], and Tamassia's bend-minimum orthogonal layout model for plane graphs [Tam87].",
      author: 'Brandes, Ulrik and Wagner, Dorothea',
      booktitle: 'Graph Drawing',
      doi: '10.1007/3-540-63938-1_66',
      keywords:
        'paradigm:node-link, time:animation, type:technique, force-directed\\_layout, orthogonal\\_layout, evaluation:none, application:generic, mental\\_map, online_problem, general-purpose_layout',
      pages: '236--247',
      publisher: 'Springer',
      series: 'GD',
      title: 'A {Bayesian} Paradigm for Dynamic Graph Layout',
      type: 'inproceedings',
      year: '1997',
    },
    Brandes2003Visual: {
      abstract:
        'We introduce a method for visualizing evolving networks. In addition to the intermediate states of the network, it conveys the nature of change between states by unrolling the dynamics of the network. Each modification is shown in a separate layer of a three-dimensional representation, where the stack of layers corresponds to a time line of the evolution. We focus on networks of dynamic discourse as the driving application, but the method extends to any type of networks evolving in similar ways.',
      author: 'Brandes, Ulrik and Corman, Steven R',
      doi: '10.1057/palgrave.ivs.9500037',
      issn: '1473-8724',
      journal: 'Information Visualization',
      keywords:
        'application:social, 3d, time:timeline, paradigm:node-link, evaluation:case\\_study, type:technique, superimposed_node-link, force-directed_layout, fixed_nodes',
      number: '1',
      pages: '40--50',
      publisher: 'SAGE Publications',
      references: 'Misue1995Layout',
      title:
        'Visual Unrolling of Network Evolution and the Analysis of Dynamic Discourse',
      type: 'article',
      volume: '2',
      year: '2003',
    },
    Brandes2006Affiliation: {
      abstract:
        'We propose a visualization approach for dynamic affiliation networks in which events are characterized by a set of descriptors. It uses a radial ripple metaphor to display the passing of time and conveys relations among the different constituents through appropriate layout. Our method is particularly suitable when assuming an egocentric perspective, and we illustrate it on movie-actor biographies.',
      author: 'Brandes, Ulrik and Hoefer, Martin and Pich, Christian',
      booktitle:
        'Proceedings of the 8th Joint Eurographics / IEEE VGTC Conference on Visualization',
      doi: '10.2312/VisSym/EuroVis06/179-186',
      keywords:
        'ego_network, type:application, application:media, time:timeline, time:animation, evaluation:case_study, paradigm:node-link, radial',
      pages: '179--186',
      publisher: 'Eurographics Association',
      series: 'EuroVis',
      title:
        'Affiliation Dynamics with an Application to Movie-Actor Biographies.',
      type: 'inproceedings',
      year: '2006',
    },
    Brandes2006Dynamic: {
      abstract:
        'Spectral methods are naturally suited for dynamic graph layout, because moderate changes of a graph yield moderate changes of the layout under weak assumptions. We discuss some general principles for dynamic graph layout and derive a dynamic spectral layout approach for the animation of small-world models.',
      author: 'Brandes, Ulrik and Fleischer, Daniel and Puppe, Thomas',
      booktitle: 'Graph Drawing',
      doi: '10.1007/11618058_3',
      keywords:
        'type:technique, paradigm:node-link, time:animation, evaluation:case_study, application:generic, online_problem, special-purpose_layout',
      pages: '25--36',
      publisher: 'Springer',
      references: 'Diehl2001Preserving Friedrich2002Graph Misue1995Layout',
      series: 'GD',
      title: 'Dynamic Spectral Layout of Small Worlds',
      type: 'inproceedings',
      year: '2006',
    },
    Brandes2011Asymmetric: {
      abstract:
        "In modeling and analysis of longitudinal social networks, visual exploration is used in particular to complement and inform other methods. The most common graphical representations for this purpose appear to be animations and small multiples of intermediate states, depending on the type of media available. We present an alternative approach based on matrix representation of gestaltlines (a combination of Tufte's sparklines with glyphs based on gestalt theory). As a result, we obtain static, compact, yet data-rich diagrams that support specifically the exploration of evolving dyadic relations and persistent group structure, although at the expense of cross-sectional network views and indirect linkages.",
      author: 'Brandes, Ulrik and Nick, Bobo',
      doi: '10.1109/TVCG.2011.169',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:technique, paradigm:matrix, time:timeline, evaluation:case\\_study, evaluation:expert, application:social, gestalt\\_laws, sparklines, directed_graph, multivariate_graph, intra-cell_timelines',
      number: '12',
      pages: '2283--2290',
      publisher: 'IEEE',
      references:
        'Brandes2012Visualization Frishman2008Online Moody2005Dynamic Nesbitt2002Applying Stein2010PixelOriented Yi2010TimeMatrix',
      series: 'TVCG',
      title: 'Asymmetric Relations in Longitudinal Social Networks',
      type: 'article',
      volume: '17',
      year: '2011',
    },
    Brandes2012Quantitative: {
      abstract:
        'In dynamic graph drawing, the input is a sequence of graphs for which a sequence of layouts is to be generated such that the quality of individual layouts is balanced with layout stability over time. Qualitatively different extensions of drawing algorithms for static graphs to the dynamic case have been proposed, but little is known about their relative utility. We report on a quantitative study comparing the three prototypical extensions via their adaptation for the stress-minimization framework. While some findings are more subtle, the linking approach connecting consecutive instances of the same vertex is found to be the overall method of choice.',
      author: 'Brandes, Ulrik and Mader, Martin',
      booktitle: 'Graph Drawing',
      doi: '10.1007/978-3-642-25878-7_11',
      keywords:
        'type:evaluation, paradigm:node-link, time:animation, evaluation:algorithmic, application:social, offline\\_problem, mental\\_map',
      organization: 'Springer',
      pages: '99--110',
      references:
        'Brandes2003Visual Huang1998Online Misue1995Layout Moody2005Dynamic',
      series: 'GD',
      title:
        'A quantitative comparison of stress-minimization approaches for offline dynamic graph drawing',
      type: 'inproceedings',
      year: '2012',
    },
    Brandes2012Visualization: {
      abstract:
        'As a consequence of the rising interest in longitudinal social networks and their analysis, there is also an increasing demand for tools to visualize them. We argue that similar adaptations of state-of-the-art graph-drawing methods can be used to visualize both, longitudinal networks and predictions of stochastic actor-oriented models (SAOMs), the most prominent approach for analyzing such networks. The proposed methods are illustrated on a longitudinal network of acquaintanceship among university freshmen.',
      author: 'Brandes, Ulrik and Indlekofer, Natalie and Mader, Martin',
      doi: '10.1016/j.socnet.2011.06.002',
      journal: 'Social Networks',
      keywords:
        'type:application, paradigm:node-link, time:animation, evaluation:case\\_study, application:social',
      number: '3',
      pages: '291--308',
      publisher: 'Elsevier',
      references:
        'Dwyer2004Visualising Friedrich2002Graph Frishman2008Online Groh2009Interactively Huang1998Online Misue1995Layout Moody2005Dynamic Nesbitt2002Applying Saffrey2008Mental',
      title:
        'Visualization methods for longitudinal social networks and stochastic actor-oriented modeling',
      type: 'article',
      volume: '34',
      year: '2012',
    },
    Branke2001Dynamic: {
      abstract:
        'Many graph drawing (GD) scenarios are dynamic inasmuch as they involve a repeated redrawing of the graph after frequently occurring changes to the graph structure and/or some layout properties.',
      author: 'Branke, J\\"urgen',
      booktitle: 'Drawing graphs',
      doi: '10.1007/3-540-44969-8_9',
      keywords:
        'type:evaluation, paradigm:node-link, time:animation, evaluation:survey, application:generic, mental_map, orthogonal_layout, 3D, force-directed_layout, hierarchical_layout, directed_graph',
      pages: '228--246',
      publisher: 'Springer',
      title: 'Dynamic Graph Drawing',
      type: 'incollection',
      year: '2001',
    },
    Brasch2012VENLO: {
      abstract:
        'To understand life, it is fundamental to elucidate the evolution and function of biological networks in multiple species. Recently it has become possible to reconstruct the evolution of specific biological networks for several species. The data resulting from these reconstructions consists of ancestral networks and gene trees. To analyze such data, interactive visual methods are needed. We present a system that is able to visualize the evolution of biological networks in many species. We start with providing a comprehensible overview of the entire data set and provide details of the data upon demand via interaction mechanisms to select interesting subsets of the data. The selected subsets can be visualized using two main visualization types: (a) as network alignments in 2.5D (or other known) layouts or (b) as an animation of evolving networks. We developed a graph layout algorithm supporting the comparison of networks across both species and time steps without changing the graph layout while switching between the overview, the animated view, and the alignment view.We evaluate our system by applying it to real-world data.',
      author: 'Brasch, Steffen and Fuellen, Georg and Linsen, Lars',
      booktitle: 'Visualization in Medicine and Life Sciences II',
      doi: '10.1007/978-3-642-21608-4_13',
      keywords:
        'application:biology, type:application, paradigm:node-link, time:timeline, time:animation, 3D, evaluation:none, superimposed_node-link',
      pages: '229--247',
      publisher: 'Springer',
      references: 'Brandes2003Visual Erten2004Simultaneous Gorg2005Dynamic',
      title:
        '{VENLO}: Interactive Visual Exploration of Aligned Biological Networks and Their Evolution',
      type: 'incollection',
      year: '2012',
    },
    Burch2008TimeRadarTrees: {
      abstract:
        'The evolution of dependencies in information hierarchies can be modeled by sequences of compound digraphs with edge weights. In this paper we present a novel approach to visualize such sequences of graphs. It uses radial tree layout to draw the hierarchy, and circle sectors to represent the temporal change of edges in the digraphs. We have developed several interaction techniques that allow the users to explore the structural and temporal data. Smooth animations help them to track the transitions between views. The usefulness of the approach is illustrated by examples from very different application domains.',
      author: 'Burch, Michael and Diehl, Stephan',
      doi: '10.1111/j.1467-8659.2008.01213.x',
      journal: 'Computer Graphics Forum',
      keywords:
        'radial, paradigm:matrix, time:timeline, directed_graph, weighted_graph, compound_graph,  application:sports, application:business, type:technique, evaluation:case\\_study, application:software\\_engineering, layered_matrices',
      number: '3',
      pages: '823--830',
      publisher: 'Blackwell Publishing Ltd',
      references: 'Elmqvist2003Causality',
      series: 'CGF',
      'survey:data': '(n:21, e:1300, t:14)',
      title: '{TimeRadarTrees}: Visualizing dynamic compound digraphs',
      type: 'article',
      volume: '27',
      year: '2008',
    },
    Burch2010TimeSpiderTrees: {
      abstract:
        'Graphs are a mathematical method to model relations between objects. The most common metaphor to visualize graphs is the node-link technique, which typically suffers from visual clutter caused by many edge crossings. Much research has been done on the development of sophisticated algorithms aimed at enhancing the layout with respect to edge crossings and a series of other aesthetic criteria. In this paper we propose a novel visual metaphor, called Time-SpiderTrees, which is based on a radial layout. In our technique, relations are visually indicated by orientation instead of connectedness to circumvent the problem of edge crossings. The strength of this novel visualization technique lies in the visual encoding of time-series relational data in a single view without animation, which helps to preserve the mental map and hence to reduce cognitive efforts.',
      author:
        'Burch, Michael and Fritz, Michael and Beck, Fabian and Diehl, Stephan',
      booktitle:
        'Proceedings of the IEEE Symposium on Visual Languages and Human-Centric Computing',
      doi: '10.1109/vlhcc.2010.31',
      isbn: '978-0-7695-4206-5',
      keywords:
        'application:document, application:sports, radial, paradigm:node-link, directed_graph, weighted_graph, compound_graph, time:timeline, evaluation:case\\_study, type:technique, juxtaposed_node-link, omitted_links',
      pages: '168--175',
      publisher: 'IEEE',
      references: 'Beck2009Aesthetic',
      series: 'VL/HCC',
      'survey:data': '(n:15, e:?, t:5), (n:21, e:1300, t:14)',
      title:
        '{TimeSpiderTrees}: A Novel Visual Metaphor for Dynamic Compound Graphs',
      type: 'inproceedings',
      year: '2010',
    },
    Burch2011Layered: {
      abstract:
        'We introduce a novel technique for visualizing dense time-varying directed and weighted multi-graphs with an additional hierarchical organization of the graph nodes. Combining Indented Tree Plots and TimeRadarTrees, we show the temporal evolution of relations in a static view. The graph edges are layered around thumbnail wheels consisting of color-coded sectors that are representatives of the graph nodes. These sectors generate implicit representations of graph edges. Start and target vertices are perceived by inspecting the color coding of sectors in the context of other sectors and their orientations. The technique puts emphasis on newer relations and hence, these are mapped to a larger display space in the radial diagram. The benefit of our technique is reduction of visual clutter from which node-link diagrams typically suffer. The visualization focuses on an easy exploration of trends, countertrends, periodicity, temporal shifts, and anomalies in time-varying relational data. We demonstrate the usefulness of the approach by applying it to dense dynamic graph data acquired from a soccer match of the 2D Soccer Simulation League.',
      author: 'Burch, Michael and H\\"oferlin, Markus and Weiskopf, Daniel',
      booktitle:
        'Proceedings of the 15th International Conference on Information Visualisation',
      doi: '10.1109/IV.2011.93',
      keywords:
        'application:sports, paradigm:matrix, radial, compound_graph, weighted_graph, directed_graph, type:technique, evaluation:case\\_study, time:timeline, layered_matrices',
      pages: '18--25',
      publisher: 'IEEE',
      references:
        'Archambault2011Animation Beck2009Aesthetic Burch2008TimeRadarTrees Frishman2008Online Greilich2009Visualizing Misue1995Layout',
      series: 'IV',
      'survey:data': '(n:34, e:complete, t:6000)',
      title: 'Layered {TimeRadarTrees}',
      type: 'inproceedings',
      year: '2011',
    },
    Burch2011Parallel: {
      abstract:
        'We present a novel dynamic graph visualization technique based on node-link diagrams. The graphs are drawn side-byside from left to right as a sequence of narrow stripes that are placed perpendicular to the horizontal time line. The hierarchically organized vertices of the graphs are arranged on vertical, parallel lines that bound the stripes; directed edges connect these vertices from left to right. To address massive overplotting of edges in huge graphs, we employ a splatting approach that transforms the edges to a pixel-based scalar field. This field represents the edge densities in a scalable way and is depicted by non-linear color mapping. The visualization method is complemented by interaction techniques that support data exploration by aggregation, filtering, brushing, and selective data zooming. Furthermore, we formalize graph patterns so that they can be interactively highlighted on demand. A case study on software releases explores the evolution of call graphs extracted from the JUnit open source software project. In a second application, we demonstrate the scalability of our approach by applying it to a bibliography dataset containing more than 1.5 million paper titles from 60 years of research history producing a vast amount of relations between title words.',
      author:
        'Burch, Michael and Vehlow, Corinna and Beck, Fabian and Diehl, Stephan and Weiskopf, Daniel',
      doi: '10.1109/tvcg.2011.226',
      issn: '1077-2626',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'paradigm:node-link, application:document, application:software\\_engineering, mental\\_map, time:timeline, bipartite, compound_graph, weighted_graph, directed_graph, graph\\_difference, type:technique, evaluation:case\\_study, juxtaposed_node-link',
      number: '12',
      pages: '2344--2353',
      publisher: 'IEEE',
      references:
        'Archambault2011Animation Brandes2003Visual Burch2008TimeRadarTrees Collberg2003System Frishman2008Online Greevy2006Visualizing Greilich2009Visualizing Ogawa2009codeswarm',
      series: 'TVCG',
      'survey:data':
        '(n:2817, e:15339, t:21), (n:?, e:264311, t:21), (n:?, e:412416, t:21)',
      title:
        '{Parallel Edge Splatting} for Scalable Dynamic Graph Visualization',
      type: 'article',
      volume: '17',
      year: '2011',
    },
    Burch2012Radial: {
      abstract:
        'We describe and discuss a novel radial version of a scalable dynamic graph visualization. The radial layout encodes dynamic directed graphs on narrow rings of a circle. The temporal evolution of the graph is mapped to rings that grow outward from the center of the circle. Graph vertices are placed equidistantly at the borderlines of each ring. Graph edges are displayed as curved lines starting from a source on the inner borderline of the ring and pointing to a target on the outer borderline. To better perceive link directions and structures of large datasets, visual clutter is reduced by exploiting an edge splatting approach that generates density fields of the displayed edges. The radial layout emphasizes newer graphs, displayed in the larger, outer parts of the circle. As a benefit, edge lengths are reduced in comparison to the non-radial visualization. Moreover, the radial layout guarantees the symmetry of the visualization under shifting of vertices. We illustrate the usefulness of the diagrams by applying them to call graph data of the open source software project Cobertura.',
      author: 'Burch, Michael and Beck, Fabian and Weiskopf, Daniel',
      booktitle:
        'Proceedings of the 4th International Conference on Information Visualization Theory and Applications',
      doi: '10.5220/0003828506030612',
      keywords:
        'paradigm:node-link, radial, application:software\\_engineering, type:technique, evaluation:case\\_study, time:timeline, bipartite, compound_graph, weighted_graph, directed_graph, juxtaposed_node-link',
      pages: '603--612',
      publisher: 'SciTePress',
      references:
        'Brandes2011Asymmetric Burch2008TimeRadarTrees Burch2011Parallel Frishman2008Online Greilich2009Visualizing Misue1995Layout Stein2010PixelOriented Yi2010TimeMatrix',
      series: 'IVAPP',
      'survey:data': '(n:4812, e:27208, t:14)',
      title: '{Radial Edge Splatting} For Visualizing Dynamic Directed Graphs',
      type: 'inproceedings',
      year: '2012',
    },
    Burch2012Visualizing: {
      abstract:
        "Visualizing time-varying call graphs is challenging due to vast amounts of data at many dimensions to be displayed: Hierarchically organized vertices with attributes, directed or undirected edges with weights, and time. In this paper, we introduce a novel overview representation that shows dynamic graphs as a timeline- and pixel-based aggregated view targeting the preservation of a viewer's mental map by encoding the time-varying data into a static diagram. This view allows comparisons of dynamic call graphs on different levels of hierarchical granularity. Our data extraction and visualization system uses this overview as a starting point for further investigations by applying existing dynamic graph visualization techniques that show the graph structures and properties more clearly. These more task-specific visualizations show the dynamic graph data from different perspectives such as curved node-link diagrams or glyph-based representations combined by linking and brushing. Intermediate analysis steps can be stored and rebuilt at any time by using corresponding thumbnail representations.",
      author:
        'Burch, Michael and M\\"uller, Christoph and Reina, Guido and Schmauder, Hansj\\"org and Greis, Miriam and Weiskopf, Daniel',
      booktitle: 'Vision, Modeling \\& Visualization',
      doi: '10.2312/PE/VMV/VMV12/207-214',
      keywords:
        'type:application, application:software_engineering, time:timeline, paradigm:node-link, evaluation:none',
      organization: 'The Eurographics Association',
      pages: '207--214',
      references:
        'Beck2012Rapid Brandes2003Visual Burch2008TimeRadarTrees Burch2011Parallel Collberg2003System Frishman2008Online Greilich2009Visualizing Misue1995Layout Ogawa2009codeswarm',
      series: 'VMV',
      title: 'Visualizing Dynamic Call Graphs',
      type: 'inproceedings',
      year: '2012',
    },
    Burch2013MatrixBased: {
      abstract:
        'We introduce a matrix-based visualization technique for exploring time-varying directed and weighted graphs. Two overview representations are shown: one for the time-aggregated relations with attached quantitative weighted attributes and one for the results of an automatic dynamic pattern identification algorithm, i.e., relations accompanied by categorical attributes. Apart from a dynamic edge pattern categorization, our tool can also compute graph-specific properties---such as shortest paths or the existence of cliques---and highlight their evolution over time. The visualization method is complemented by interaction techniques that allow the user to navigate, explore, and browse the data, based on the Visual Information Seeking Mantra---overview first, zoom and filter, then details-on-demand. If an additional hierarchical organization of the vertices is available, this is attached to the matrix by vertical and horizontal layered icicle plots allowing one to explore the data on different levels of hierarchical granularity. The usefulness of the tool is demonstrated by applying it to time-varying migration data in the hierarchically structured world.',
      author: 'Burch, Michael and Schmidt, Benjamin and Weiskopf, Daniel',
      booktitle:
        'Proceedings of the 17th International Conference Information Visualisation',
      doi: '10.1109/IV.2013.8',
      keywords:
        'type:technique, time:timeline, paradigm:matrix, application:social, evaluation:case_study, compound_graph, directed_graph, sparklines, intra-cell_timelines',
      pages: '66-73',
      publisher: 'IEEE',
      references:
        'Burch2008TimeRadarTrees Burch2011Parallel Frishman2008Online Yi2010TimeMatrix Brandes2011Asymmetric Stein2010PixelOriented',
      series: 'IV',
      title:
        'A Matrix-Based Visualization for Exploring Dynamic Compound Digraphs',
      type: 'inproceedings',
      year: '2013',
    },
    Burch2014Dynamic: {
      abstract:
        'During eye tracking studies, vast amounts of spatio-temporal data in the form of eye gaze trajectories are recorded. Finding insights into these time-varying data sets is a challenging task. Visualization techniques such as heat maps or gaze plots help find patterns in the data but either highly aggregate the data (heat maps) or are difficult to read due to overplotting (gaze plots). In this paper, we propose transforming eye movement data into a dynamic graph data structure to explore the visualization problem from a new perspective. By aggregating gaze trajectories of participants over time periods or Areas of Interest (AOIs), a fair trade-off between aggregation and details is achieved. We show that existing dynamic graph visualizations can be used to display the transformed data and illustrate the approach by applying it to eye tracking data recorded for investigating the readability of tree diagrams.',
      author:
        'Burch, Michael and Beck, Fabian and Raschke, Michael and Blascheck, Tanja and Weiskopf, Daniel',
      booktitle:
        'Proceedings of the Symposium on Eye Tracking Research and Applications',
      doi: '10.1145/2578153.2578175',
      keywords:
        'type:application, time:generic, paradigm:generic, evaluation:case_study, application:eye_tracking',
      pages: '151--158',
      references:
        'Archambault2011Animation Beck2009Aesthetic Beck2013Matching Brandes2003Visual Brandes2011Asymmetric Burch2008TimeRadarTrees Burch2011Parallel Burch2013MatrixBased Frishman2008Online Hurter2013Bundled Purchase2007Important Stein2010PixelOriented',
      series: 'ETRA',
      title: 'A Dynamic Graph Visualization Perspective on Eye Movement Data',
      type: 'inproceedings',
      year: '2014',
    },
    Burch2014FlipBook: {
      abstract:
        'Dynamic graph visualization techniques can be based on animated or static diagrams showing the evolution over time. In this paper, we apply the concept of small multiples representations to visually illustrate the dynamics of a graph. Node-link diagrams are used as the basic visual metaphor for displaying individual graphs of the sequence. To improve the readability of the diagram and reduce visual clutter we apply an edge splatting technique. Here, we discuss the benefits of splatted radial graph layouts on a modifiable 2D grid. Moreover, to obtain a more scalable dynamic graph visualization we interactively support a graph analyst by a Rapid Serial Visual Presentation (RSVP) feature to rapidly flip between the sequences of displayed graphs. The usefulness of the technique is illustrated in two case studies investigating a dynamic call graph and an evolving social network that consists of more than 1,000 graphs.',
      author: 'Burch, Michael and Weiskopf, Daniel',
      booktitle:
        'Proceedings of the 7th International Symposium on Visual Information Communication and Interaction',
      doi: '10.1145/2636240.2636839',
      keywords:
        'type:technique, time:timeline, time:animation, paradigm:node-link, juxtaposed_node-link, evaluation:case_study, application:software_engineering, application:social, fixed_nodes, radial, linear_arrangement, offline_problem, software_evolution',
      pages: '29--38',
      publisher: 'ACM',
      references:
        'Archambault2011Animation Beck2014State Beck2012Rapid Brandes2011Asymmetric Burch2012Radial Burch2008TimeRadarTrees Burch2011Parallel Frishman2008Online Ghani2012Perception Purchase2007Important Rufiange2013DiffAni Stein2010PixelOriented',
      series: 'VINCI',
      title:
        'A Flip-Book of Edge-Splatted Small Multiples for Visualizing Dynamic Graphs',
      type: 'inproceedings',
      year: '2014',
    },
    'Burch2015Edge-Stacked': {
      abstract:
        'We investigate the problem of visually encoding time-varying weighted digraphs to provide an overview about dynamic graphs. Starting from a rough overview of dynamic relational data an analyst can subsequently explore the data in more detail to gain further insights. To reach this goal we first map the graph vertices in the graph sequence to a common horizontal axis. Edges between vertices are represented as stacked horizontal and color-coded links starting and ending at their corresponding start and end vertex positions. The direction of each edge is indicated by placing it either above or below the horizontal vertex line. We attach a vertically aligned timeline to each link to show the weight evolution for those links. The order of the vertices and stacked edges is important for the readability of the visualization. We support interactive reordering and sorting in the vertex, edge, and timeline representations. The usefulness of our edge-stacked timelines is illustrated in a case study showing dynamic call graph data from software development.',
      author: 'Burch, Michael and Munz, Tanja and Weiskopf, Daniel',
      booktitle:
        'Proceedings of the International Conference on Information Visualization Theory and Applications',
      doi: '10.5220/0005259200930100',
      keywords:
        'type:technique, time:timeline, directed_graph, paradigm:node-link, application:software_engineering, program_execution, evaluation:case_study, compound_graph, weighted_graph, linear_arrangement, integrated_node-link',
      references:
        'Archambault2011Animation Beck2009Aesthetic Beck2013Matching Beck2014State Brandes2003Visual Brandes2011Asymmetric Burch2008TimeRadarTrees Burch2013MatrixBased Burch2011Parallel Purchase2007Important Stein2010PixelOriented Vehlow2013Radial',
      series: 'IVAPP',
      title: 'Edge-Stacked Timelines for Visualizing Dynamic Weighted Digraphs',
      type: 'inproceedings',
      year: '2015',
    },
    Burch2015FlipBook: {
      abstract:
        'Dynamic graph visualization techniques can be based on animated or static diagrams showing the evolution over time. In this paper, we apply the concept of small multiples to visually illustrate the dynamics of a graph. Node-link, adjacency matrix, and adjacency list visualizations are used as basic visual metaphors for displaying individual graphs of the sequence. For node-link diagrams, we apply edge splatting to improve readability and reduce visual clutter caused by overlaps and link crossings. Additionally, to obtain a more scalable dynamic graph visualization in the time dimension, we integrate an interactive Rapid Serial Visual Presentation (RSVP) feature to rapidly flip between the sequences of displayed graphs, similar to the concept of flipping a book\u2019s pages. Our visualization tool supports the focus-and-context design principle by providing an overview of a longer time sequence as small multiples in a grid while also showing a graph in focus as a large single representation in a zoomed in and more detailed view. The usefulness of the technique is illustrated in two case studies investigating a dynamic directed call graph and an evolving social network that consists of more than 1,000 undirected graphs.',
      author: 'Burch, Michael and Weiskopf, Daniel',
      comment: 'extended version of Burch2014FlipBook',
      journal: 'International Journal of Software and Informatics',
      keywords:
        'type:technique, time:timeline, time:animation, paradigm:node-link, juxtaposed_node-link, evaluation:case_study, application:software_engineering, application:social, fixed_nodes, radial, linear_arrangement, offline_problem, software_evolution, paradigm:matrix, paradigm:list',
      references:
        'Archambault2011Animation Beck2014State Beck2012Rapid Brandes2011Asymmetric Burch2008TimeRadarTrees Burch2012Visualizing Burch2011Parallel Frishman2008Online Ghani2012Perception Hlawatsch2014Visual Purchase2007Important Rufiange2013DiffAni Rufiange2014AniMatrix Stein2010PixelOriented',
      title: 'Flip-Book Visualization of Dynamic Graphs',
      type: 'article',
      year: '2015',
    },
    Cengiz2013Visualization: {
      abstract:
        "Visualisations of temporal social network datasets have the potential to be complex and require a lot of cognitive input. In this paper, we present a novel visualisation approach that depicts both relational and statistical information of evolving social structures. The underlying framework is implemented by the usage of Hyperbolic Geometry to support focus context rendering. The proposed method guarantees representing prominent social actors through scaling their representations, preserves user's mental map, and provides the user to reduce visual clutter by means of filtering.",
      author: 'Cengiz Turker, Uraz and Balcisoy, Selim',
      doi: '10.1016/j.jvlc.2013.10.008',
      journal: 'Journal of Visual Languages \\& Computing',
      keywords:
        'paradigm:node-link, mental\\_map, type:application, time:animation, evaluation:case\\_study, evaluation:user\\_study, evaluation:algorithmic, application:social, network\\_metrics, radial',
      number: '3',
      pages: '227--242',
      publisher: 'Elsevier',
      references:
        'Frishman2008Online Kumar2006Visual Shi2011Dynamic Ghani2012Perception',
      title:
        'A Visualization Technique for Large Temporal Social Network Datasets in Hyperbolic Space',
      type: 'article',
      volume: '25',
      year: '2013',
    },
    Chen2003Visualizing: {
      abstract:
        'Network evolution is an ubiquitous phenomenon in a wide variety of complex systems. There is an increasing interest in statistically modeling the evolution of complex networks such as small-world networks and scale-free networks. In this article, we address a practical issue concerning the visualizations of co-citation networks of scientific publications derived by two widely known link reduction algorithms, namely minimum spanning trees (MSTs) and pathfinder networks (PFNETs). Our primary goal is to identify the strengths and weaknesses of the two methods in fulfilling the need for visualizing evolving networks. Two criteria are derived for assessing visualizations of evolving networks in terms of topological properties and dynamical properties. We examine the animated visualization models of the evolution of botulinum toxin research in terms of its co-citation structure across a 58-year span (1945-2002). The results suggest that although high-degree nodes dominate the structure of MST models, such structures can be inadequate in depicting the essence of how the network evolves because MST removes potentially significant links from high-order shortest paths. In contrast, PFNET models clearly demonstrate their superiority in maintaining the cohesiveness of some of the most pivotal paths, which in turn make the growth animation more predictable and interpretable. We suggest that the design of visualization and modeling tools for network evolution should take the cohesiveness of critical paths into account.',
      author: 'Chen, Chaomei and Morris, Steven',
      booktitle:
        'Proceedings of the 2003 IEEE Symposium on Information Visualization',
      doi: '10.1109/INFVIS.2003.1249010',
      keywords:
        'type:evaluation, time:animation, paradigm:node-link, evaluation:case_study, application:document, 3d',
      pages: '67--74',
      publisher: 'IEEE',
      series: 'InfoVis',
      title:
        'Visualizing evolving networks: Minimum spanning trees versus pathfinder networks',
      type: 'inproceedings',
      year: '2003',
    },
    Chen2006CiteSpace: {
      abstract:
        "This article describes the latest development of a generic approach to detecting and visualizing emerging trends and transient patterns in scientific literature. The work makes substantial theoretical and methodological contributions to progressive knowledge domain visualization. A specialty is conceptualized and visualized as a time-variant duality between two fundamental concepts in information science: research fronts and intellectual bases. A research front is defined as an emergent and transient grouping of concepts and underlying research issues. The intellectual base of a research front is its citation and co-citation footprint in scientific literature\u2014an evolving network of scientific publications cited by research-front concepts. Kleinberg's (2002) burst-detection algorithm is adapted to identify emergent research-front concepts. Freeman's (1979) betweenness centrality metric is used to highlight potential pivotal points of paradigm shift over time. Two complementary visualization views are designed and implemented: cluster views and time-zone views. The contributions of the approach are that (a) the nature of an intellectual base is algorithmically and temporally identified by emergent research-front terms, (b) the value of a co-citation cluster is explicitly interpreted in terms of research-front concepts, and (c) visually prominent and algorithmically detected pivotal points substantially reduce the complexity of a visualized network. The modeling and visualization process is implemented in CiteSpace II, a Java application, and applied to the analysis of two research fields: mass extinction (1981\u20132004) and terrorism (1990\u20132003). Prominent trends and pivotal points in visualized networks were verified in collaboration with domain experts, who are the authors of pivotal-point articles. Practical implications of the work are discussed. A number of challenges and opportunities for future studies are identified.",
      author: 'Chen, Chaomei',
      doi: '10.1002/asi.20317',
      journal:
        'Journal of the American Society for Information Science and Technology',
      keywords:
        'type:application, application:document, paradigm:node-link, time:timeline, evaluation:case_study, evaluation:expert',
      number: '3',
      pages: '359--377',
      publisher: 'Wiley Subscription Services, Inc., A Wiley Company',
      title:
        '{CiteSpace II}: Detecting and visualizing emerging trends and transient patterns in scientific literature',
      type: 'article',
      volume: '57',
      year: '2006',
    },
    Cohen1992Framework: {
      abstract:
        'In this paper we give a model for dynamic graph algorithms, based on performing queries and updates on an implicit representation of the drawing. We present dynamic algorithms for drawing planar graphs that use a variety of drawing standards (such as polyline, straight-line, orthogonal, grid, upward, and visibility drawings), and address aesthetic criteria that are important for readability, such as the display of planarity, symmetry, and reachability. Also, we provide techniques that are especially tailored for important subclasses of planar graphs such as trees and series-parallel digraphs. Our dynamic drawing algorithms have the important property of performing "smooth updates" of the drawing. Of special geometric interest is the possibility of performing point-location and window queries on the implicit representation of the drawing.',
      author:
        'Cohen, Robert F and Di Battista, Giuseppe and Tamassia, Roberto and Tollis, Ioannis G and Bertolazzi, Paola',
      booktitle:
        'Proceedings of the 8th Annual Symposium on Computational Geometry',
      doi: '10.1145/142675.142728',
      keywords:
        'paradigm:node-link, time:animation, planar_graph, evaluation:theoretical, type:technique, application:generic, online_problem, special-purpose_layout',
      organization: 'ACM',
      pages: '261--270',
      series: 'SoCG',
      title: 'A Framework for Dynamic Graph Drawing',
      type: 'inproceedings',
      year: '1992',
    },
    Cohen1995Dynamic: {
      abstract:
        'Drawing graphs is an important problem that combines elements of computational geometry and graph theory. Applications can be found in a variety of areas including circuit layout, network management, software engineering, and graphics. The main contributions of this paper can be summarized as follows: We devise a model for dynamic graph algorithms, based on performing queries and updates on an implicit representation of the drawing, and we show its applications. We present efficient dynamic drawing algorithms for trees and series-parallel digraphs. As further applications of the model, we give dynamic drawing algorithms for planar st-digraphs and planar graphs. Our algorithms adopt a variety of representations (e.g., straight line, polyline, visibility) and update the drawing in a smooth way.',
      author:
        'Cohen, Robert F and Di Battista, Giuseppe and Tamassia, Roberto and Tollis, Ioannis G',
      comment:
        'appeared as a technical report in 1992; is an extended version of [Cohen1992Framework]',
      doi: '10.1137/S0097539792235724',
      journal: 'SIAM Journal on Computing',
      keywords:
        'paradigm:node-link, time:animation, planar_graph, evaluation:theoretical, type:technique, application:generic, online_problem, special-purpose_layout',
      number: '5',
      pages: '970--1001',
      publisher: 'SIAM',
      title:
        'Dynamic Graph Drawings: Trees, Series-Parallel Digraphs, and st-Digraphs',
      type: 'article',
      volume: '24',
      year: '1995',
    },
    Collberg2003System: {
      abstract:
        'We describe GEVOL, a system that visualizes the evolution of software using a novel graph drawing technique for visualization of large graphs with a temporal component. GEVOL extracts information about a Java program stored within a CVS version control system and displays it using a temporal graph visualizer. This information can be used by programmers to understand the evolution of a legacy program: Why is the program structured the way it is? Which programmers were responsible for which parts of the program during which time periods? Which parts of the program appear unstable over long periods of time and may need to be rewritten? This type of information will complement that produced by more static tools such as source code browsers, slicers, and static analyzers.',
      author:
        'Collberg, Christian and Kobourov, Stephen G and Nagra, Jasvir and Pitts, Jacob and Wampler, Kevin',
      booktitle:
        'Proceedings of the 2003 ACM Symposium on Software Visualization',
      doi: '10.1145/774833.774844',
      keywords:
        'type:application, paradigm:node-link, time:animation, evaluation:case_study, application:software_engineering, offline_problem, fixed_nodes, software_evolution',
      organization: 'ACM',
      pages: '77--86',
      references: 'Cohen1995Dynamic',
      series: 'SoftVis',
      title:
        'A system for graph-based visualization of the evolution of software',
      type: 'inproceedings',
      year: '2003',
    },
    Curtis2012Enabling: {
      abstract:
        'Many biological processes are context-dependent or temporally specific. As a result, relationships between molecular constituents evolve across time and environments. While cutting-edge machine learning techniques can recover these networks, exploring and interpreting the rewiring behavior is challenging. Information visualization shines in this type of exploratory analysis, motivating the development ofTVNViewer (http://sailing.cs.cmu.edu/tvnviewer webcite), a visualization tool for dynamic network analysis. In this paper, we demonstrate visualization techniques for dynamic network analysis by using TVNViewer to analyze yeast cell cycle and breast cancer progression datasets. TVNViewer is a powerful new visualization tool for the analysis of biological networks that change across time or space.',
      author:
        'Curtis, Ross E and Xiang, Jing and Parikh, Ankur and Kinnaird, Peter and Xing, Eric P',
      doi: '10.1186/1471-2105-13-204',
      journal: 'BMC Bioinformatics',
      keywords:
        'type:application, paradigm:node-link, application:biology, evaluation:case_study, time:timeline, radial',
      number: '204',
      pages: '1--13',
      publisher: 'BioMed Central Ltd',
      title:
        'Enabling dynamic network analysis through visualization in {TVNViewer}',
      type: 'article',
      volume: '13',
      year: '2012',
    },
    Diehl2001Preserving: {
      abstract:
        'First we introduce the concept of graph animations as a sequence of evolving graphs and a generic algorithm which computes a Foresighted Layout for dynamically drawing these graphs while preserving the mental map. The algorithm is generic in the sense that it takes a static graph drawing algorithm as a parameter. In other words, trees can be animated with a static tree layouter, graphs with a static Sugiyama-style layouter or a spring embedder, etc. Second we discuss applications of Foresighted Layout in algorithm animation and visualization of navigation behaviour.',
      author: 'Diehl, Stephan and G\\"org, Carsten and Kerren, Andreas',
      booktitle:
        'Proceedings of the 3rd Joint Eurographics--IEEE TCVG Conference on Visualization',
      comment: 'appeared as a technical report in 2000',
      doi: '10.2312/VisSym/VisSym01/175-184',
      keywords:
        'type:technique, offline_problem, paradigm:node-link, time:animation, application:software_engineering, mental_map, 3d, evaluation:case_study, general-purpose_layout',
      organization: 'Eurographics Association',
      pages: '175--184',
      references: 'Misue1995Layout',
      series: 'VisSym',
      title: 'Preserving the mental map using foresighted layout',
      type: 'inproceedings',
      year: '2001',
    },
    Diehl2002Graphs: {
      abstract:
        'In this paper we present a generic algorithm for drawing sequences of graphs. This algorithm works for different layout algorithms and related metrics and adjustment strategies. It differs from previous work on dynamic graph drawing in that it considers all graphs in the sequence (offline) instead of just the previous ones (online) when computing the layout for each graph of the sequence. We introduce several general adjustment strategies and give examples of these strategies in the context of force-directed graph layout. Finally some results from our first prototype implementation are discussed.',
      author: 'Diehl, Stephan and G\\"org, Carsten',
      booktitle: 'Graph Drawing',
      doi: '10.1007/3-540-36151-0_3',
      isbn: '3-540-00158-1',
      journal: 'Graph Drawing',
      keywords:
        'paradigm:node-link, mental\\_map, time:animation, offline\\_problem, evaluation:case\\_study, type:technique, application:generic, general-purpose_layout',
      pages: '23--31',
      'posted-at': '2009-07-07 09:50:35',
      priority: '0',
      publisher: 'Springer-Verlag',
      references:
        'Branke2001Dynamic Cohen1995Dynamic Diehl2001Preserving Misue1995Layout',
      series: 'GD',
      title:
        'Graphs, They are Changing -- Dynamic Graph Drawing for a Sequence of Graphs',
      type: 'incollection',
      year: '2002',
    },
    Dutot2007GraphStream: {
      abstract:
        'The notion of complex systems is common to many domains, from Biology to Economy, Computer Science, Physics, etc. Often, these systems are made of sets of entities moving in an evolving environment. One of their major characteristics is the emergence of some global properties stemmed from local interactions between the entities themselves and between the entities and the environment. The structure of these systems as sets of interacting entities leads researchers to model them as graphs. However, their understanding requires most often to consider the dynamics of their evolution. It is indeed not relevant to study some properties out of any temporal consideration. Thus, dynamic graphs seem to be a very suitable model for investigating the emergence and the conservation of some properties. GraphStream is a Java-based library whose main purpose is to help researchers and developers in their daily tasks of dynamic problem modeling and of classical graph management tasks: creation, processing, display, etc. It may also be used, and is indeed already used, for teaching purpose. GraphStream relies on an event-based engine allowing several event sources. Events may be included in the core of the application, read from a file or received from an event handler.',
      author:
        "Dutot, Antoine and Guinand, Fr{\\'e}d{\\'e}ric and Olivier, Damien and Pign{\\'e} Yoann",
      booktitle:
        "Emergent Properties in Natural and Artificial Complex Systems, Satellite Conference within the 4th European Conference on Complex Systems (ECCS'2007)",
      keywords:
        'paradigm:node-link, type:application, paradigm:node-link, time:animation, evaluation:case_study, application:infrastructure',
      pages: '1--10',
      series: 'ECCS',
      title:
        '{GraphStream}: A tool for bridging the gap between complex systems and dynamic graphs',
      type: 'inproceedings',
      url: 'http://hal.archives-ouvertes.fr/hal-00264043/',
      year: '2007',
    },
    Dwyer2002Visualising: {
      abstract:
        'We describe a paradigm for visualising time dependent flow in a network of objects connected by abstract relationships (a graph) by representing time in the third dimension. We show two variants of the paradigm, one in which the elements of the graph are shown as vertical columns of varying width and another which emphasises centrality with bending "worms". We demonstrate these techniques by visualising the movements of Fund Managers within the UK Stock Market in terms of their changing share ownership over time.',
      author: 'Dwyer, Tim and Eades, Peter',
      booktitle:
        'Proceedings of the 6th International Conference on Information Visualisation',
      doi: '10.1109/IV.2002.1028770',
      keywords:
        'type:technique, time:timeline, paradigm:node-link, evaluation:case_study, application:business, 3d, superimposed_node-link, force-directed_layout, fixed_nodes',
      pages: '147--152',
      publisher: 'IEEE',
      series: 'IV',
      title: 'Visualising a fund manager flow graph with columns and worms',
      type: 'inproceedings',
      year: '2002',
    },
    Dwyer2004Visualising: {
      abstract:
        'We explore a multiple view, or overview and detail, method for visualising a high-dimensional portfolio holdings data set with attributes that change over time. The method employs techniques from multidimensional scaling and graph visualisation to find a two-dimensional mapping for high-dimensional data. In both the overview and detail views, time is mapped to the third dimension providing a two and a half-dimensional view of changes in the data. We demonstrate the utility of the paradigm with a prototype system for visualisation of movements within a large set of UK fund managers\u2019 stock portfolios.',
      author: 'Dwyer, Tim and Gallagher, David R',
      doi: '10.1057/palgrave.ivs.9500081',
      journal: 'Information Visualization',
      keywords:
        'time:timeline, paradigm:node-link, application:business, 3d, fixed_nodes, force-directed_layout, superimposed_node-link, type:application, evaluation:expert, evaluation:case_study, multivariate_graph, hierarchical_layout',
      number: '4',
      pages: '227--244',
      publisher: 'SAGE Publications',
      title:
        'Visualising changes in fund manager holdings in two and a half-dimensions',
      type: 'article',
      volume: '3',
      year: '2004',
    },
    Elmqvist2003Causality: {
      abstract:
        'We present Growing Polygons, a novel visualization technique for the graphical representation of causal relations and information flow in a system of interacting processes. Using this method, individual processes are displayed as partitioned polygons with color-coded segments showing dependencies to other processes. The entire visualization is also animated to communicate the dynamic execution of the system to the user. The results from a comparative user study of the method show that the Growing Polygons technique is significantly more efficient than the traditional Hasse diagram visualization for analysis tasks related to deducing information flow in a system for both small and large executions. Furthermore, our findings indicate that the correctness when solving causality tasks is significantly improved using our method. In addition, the subjective ratings of the users rank the method as superior in all regards, including usability, efficiency, and enjoyability.',
      author: 'Elmqvist, Niklas and Tsigas, Philippas',
      booktitle:
        'Proceedings of the 2003 IEEE Symposium on Information Visualization',
      doi: '10.1109/INFVIS.2003.1249025',
      keywords:
        'type:application, paradigm:node-link, time:timeline, time:animation, evaluation:user_study, application:software_engineering, program_execution',
      pages: '189--196',
      publisher: 'IEEE',
      series: 'InfoVis',
      title: 'Causality visualization using animated growing polygons',
      type: 'inproceedings',
      year: '2003',
    },
    Ens2014ChronoTwigger: {
      abstract:
        'Applying visual analytics to large software systems can help users comprehend the wealth of information produced by source repository mining. One concept of interest is the co-evolution of test code with source code, or how source and test files develop together over time. For example, understanding how the testing pace compares to the development pace can help test managers gauge the effectiveness of their testing strategy. A useful concept that has yet to be effectively incorporated into a co-evolution visualization is co-change. Co-change is a quantity that identifies correlations between software artifacts, and we propose using this to organize our visualization in order to enrich the analysis of co-evolution. In this paper, we create, implement, and study an interactive visual analytics tool that displays source and test file changes over time (co-evolution) while grouping files that change together (co-change). Our new technique improves the analyst\u2019s ability to infer information about the software development process and its relationship to testing. We discuss the development of our system and the results of a small pilot study with three participants. Our findings show that our visualization can lead to inferences that are not easily made using other techniques alone.',
      author:
        'Ens, Barrett and Rea, Daniel and Shpaner, Roiy and Hemmati, Hadi and Young, James E and Irani, Pourang',
      booktitle:
        'Proceedings of the 2nd IEEE Working Conference on Software Visualization',
      keywords:
        'type:application, time:timeline, 3d, paradigm:node-link, application:software_engineering, omitted_links, evaluation:user_study, software_evolution',
      pages: '117--126',
      publisher: 'IEEE',
      references: 'Beyer2006Animated',
      series: 'VISSOFT',
      title:
        '{ChronoTwigger}: A Visual Analytics Tool for Understanding Source and Test Co-Evolution',
      type: 'article',
      url: 'http://conferences.computer.org/vissoft/2014/papers/6150a117.pdf',
      year: '2014',
    },
    Erten2004Exploring: {
      abstract:
        "We present a system for the visualization of computing literature with an emphasis on collaboration patterns, interactions between related research specialties and the evolution of these characteristics through time. Our computing literature visualization system, has four major components: A mapping of bibliographical data to relational schema coupled with an RDBMS to store the relational data, an interactive GUI that allows queries and the dynamic construction of graphs, a temporal graph layout algorithm, and an interactive visualization tool. We use a novel technique for visualization of large graphs that evolve through time. Given a dynamic graph, the layout algorithm produces two-dimensional representations of each timeslice, while preserving the mental map of the graph from one slice to the next. A combined view, with all the timeslices can also be viewed and explored. For our analysis we use data from the Association of Computing Machinery's Digital Library of Scientific Literature which contains more than one hundred thousand research papers and authors. Our system can be found online at http://tgrip.cs.arizona.edu.",
      author:
        'Erten, Cesim and Harding, Philip J and Kobourov, Stephen G and Wampler, Kevin and Yee, Gary V',
      booktitle: 'Visualization and Data Analysis',
      doi: '10.1117/12.539245',
      keywords:
        'paradigm:node-link, 3d, time:timeline, type:application, evaluation:case\\_study, application:document, application:social',
      pages: '45-56',
      references: 'Cohen1995Dynamic Collberg2003System',
      series: 'VDA',
      title:
        'Exploring the Computing Literature Using Temporal Graph Visualization',
      type: 'inproceedings',
      year: '2004',
    },
    Erten2004GraphAEL: {
      abstract:
        'GraphAEL extracts three types of evolving graphs from the Graph Drawing literature and creates 2D and 3D animations of the evolutions. We study citation graphs, topic graphs, and collaboration graphs. We also create difference graphs which capture the nature of change between two given time periods. GraphAEL can be accessed online at http://graphael.cs.arizona.edu .',
      author:
        'Erten, Cesim and Harding, Philip J and Kobourov, Stephen G and Wampler, Kevin and Yee, Gary V',
      booktitle: 'Graph Drawing',
      doi: '10.1007/978-3-540-24595-7_9',
      isbn: '978-3-540-20831-0',
      keywords:
        '3d, time:animation, paradigm:node-link, type:technique, evaluation:case\\_study, application:social, force-directed_layout, graph_difference, mental_map, application:document, offline_problem, general-purpose_layout',
      pages: '98--110',
      publisher: 'Springer',
      references: 'Cohen1995Dynamic Collberg2003System',
      series: 'GD',
      title: '{GraphAEL}: Graph Animations with Evolving Layouts Graph Drawing',
      type: 'incollection',
      year: '2004',
    },
    Erten2004Simultaneous: {
      abstract:
        'In this paper we consider the problem of drawing and displaying a series of related graphs, i.e., graphs that share all, or parts of the same vertex set. We designed and implemented three different algorithms for simultaneous graph drawing and three different visualization schemes. The algorithms are based on a modification of the force-directed algorithm that allows us to take into account vertex weights and edge weights in order to achieve mental map preservation while obtaining individually readable drawings. The implementation is in Java and the system can be downloaded at http://simg.cs.arizona.edu/.',
      author:
        'Erten, Cesim and Kobourov, Stephen G and Le, Vu and Navabi, Armand',
      booktitle: 'Graph Drawing',
      doi: '10.1007/978-3-540-24595-7_41',
      keywords:
        'type:technique, force-directed_layout, paradigm:node-link, time:timeline, 3d, evaluation:none, application:generic, superimposed_node-link',
      organization: 'Springer',
      pages: '437--449',
      references: 'Collberg2003System Huang1998Online Misue1995Layout',
      series: 'GD',
      title:
        'Simultaneous graph drawing: Layout algorithms and visualization schemes',
      type: 'inproceedings',
      year: '2004',
    },
    Farrugia2011Effective: {
      abstract:
        'Graph drawing algorithms have classically addressed the layout of static graphs. However, the need to draw evolving or dynamic graphs has brought into question many of the assumptions, conventions and layout methods designed to date. For example, social scientists studying evolving social networks have created a demand for visual representations of graphs changing over time. Two common approaches to represent temporal information in graphs include animation of the network and use of static snapshots of the network at different points in time. Here, we report on two experiments, one in a laboratory environment and another using an asynchronous remote web-based platform, Mechanical Turk, to compare the efficiency of animated displays versus static displays. Four tasks are studied with each visual representation, where two characterise overview level information presentation, and two characterise micro level analytical tasks. For the tasks studied in these experiments and within the limits of the experimental system, the results of this study indicate that static representations are generally more effective particularly in terms of time performance, when compared to fully animated movie representations of dynamic networks.',
      author: 'Farrugia, Michael and Quigley, Aaron J',
      doi: '10.1057/ivs.2010.10',
      journal: 'Information Visualization',
      keywords:
        'time:animation, time:timeline, type:evaluation, paradigm:node-link, evaluation:user_study, application:generic',
      number: '1',
      pages: '47--64',
      publisher: 'SAGE Publications',
      references:
        'Bender-deMoll2006Science Moody2005Dynamic Misue1995Layout Frishman2008Online Lee2006Mental Dwyer2004Visualising Friedrich2002Graph',
      title:
        'Effective temporal graph layout: A comparative study of animation versus static display methods',
      type: 'article',
      volume: '10',
      year: '2011',
    },
    Farrugia2011Exploring: {
      abstract:
        'Many of the current dynamic network visualisations methods or techniques rely on node-link force-based models that were originally developed for visualising static network snapshots. In this study, we diverge from this traditional layout approach and develop a layout for ego networks that places the time dimension in the foreground, by turning time into an element of shape. In addition to this we develop an interactive system that enables the visualisation of multiple networks simultaneously by employing small multiples. Using the proposed layout and analytical system as a grounding visual structure, we visually characterise dynamic network events in 3 different networks; the evolution of the biotechnology field, a phone call data set and a network of passenger connections of an airline. From this analysis we propose a range of ego network visual motifs that can be used as templates to identify and characterise events that are occurring in a dynamic network.',
      author: 'Farrugia, Michael and Hurley, Neil and Quigley, Aaron J',
      booktitle:
        'Proceedings of the 4th International Conference on Advances in Computer-Human Interactions',
      keywords:
        'application:infrastructure, application:social, radial, paradigm:node-link, time:timeline, type:technique, ego\\_network, juxtaposed_node-link, evaluation:case_study',
      pages: '79--88',
      references: 'Frishman2008Online',
      series: 'ACHI',
      title:
        'Exploring temporal ego networks using small multiples and tree-ring layouts',
      type: 'inproceedings',
      url: 'http://hcibib.org/ACHI11',
      year: '2011',
    },
    Federico2011Visual: {
      abstract:
        'The visualization and analysis of dynamic networks have become increasingly important in several fields, for instance sociology or economics. The dynamic and multi-relational nature of this data poses the challenge of understanding both its topological structure and how it changes over time. In this paper we propose a visual analytics approach for analyzing dynamic networks that integrates: a dynamic layout with user-controlled trade-off between stability and consistency; three temporal views based on different combinations of node-link diagrams (layer superimposition, layer juxtaposition, and two-and-a-half-dimensional view); the visualization of social network analysis metrics; and specific interaction techniques for tracking node trajectories and node connectivity over time. This integration of visual, interactive, and automatic methods supports the multi-faceted analysis of dynamically changing networks.',
      author:
        'Federico, Paolo and Aigner, Wolfgang and Miksch, Silvia and Windhager, Florian and Zenk, Lukas',
      booktitle:
        'Proceedings of the 11th International Conference on Knowledge Management and Knowledge Technologies',
      doi: '10.1145/2024288.2024344',
      keywords:
        'type:technique, paradigm:node-link, time:timeline, evaluation:none, application:social, 3d, superimposed_node-link, juxtaposed_node-link',
      pages: '47',
      references:
        'Bender-deMoll2006Science Brandes2003Visual Dwyer2004Visualising Lee2006Mental Misue1995Layout Moody2005Dynamic Saffrey2008Mental',
      series: 'i-KNOW',
      title: 'A Visual Analytics Approach to Dynamic Social Networks',
      type: 'inproceedings',
      year: '2011',
    },
    Feng2012Coherent: {
      abstract:
        'We present a new approach for time-varying graph drawing that achieves both spatiotemporal coherence and multifocus+context visualization in a single framework. Our approach utilizes existing graph layout algorithms to produce the initial graph layout, and formulates the problem of generating coherent time-varying graph visualization with the focus+context capability as a specially tailored deformation optimization problem. We adopt the concept of the super graph to maintain spatiotemporal coherence and further balance the needs for aesthetic quality and dynamic stability when interacting with time-varying graphs through focus+context visualization. Our method is particularly useful for multifocus+context visualization of time-varying graphs where we can preserve the mental map by preventing nodes in the focus from undergoing abrupt changes in size and location in the time sequence. Experiments demonstrate that our method strikes a good balance between maintaining spatiotemporal coherence and accentuating visual foci, thus providing a more engaging viewing experience for the users.',
      address: 'Los Alamitos, CA, USA',
      author:
        'Feng, Kun-Chuan and Wang, Chaoli and Shen, Han-Wei and Lee, Tong-Yee',
      doi: '10.1109/TVCG.2011.128',
      issn: '1077-2626',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:technique, paradigm:node-link, time:animation, evaluation:algorithmic, application:social, application:document, mental\\_map, offline_problem, general-purpose_layout',
      number: '8',
      pages: '1330-1342',
      publisher: 'IEEE Computer Society',
      references: 'Diehl2001Preserving Frishman2004Dynamic Misue1995Layout',
      series: 'TVCG',
      title:
        'Coherent Time-Varying Graph Drawing with Multifocus+Context Interaction',
      type: 'article',
      volume: '18',
      year: '2012',
    },
    Forrester2005graphael: {
      abstract:
        'The graphael system implements several traditional force-directed layout methods, as well as several novel layout methods for non-Euclidean geometries, including hyperbolic and spherical. The system can handle large graphs, using multi-scale variations of the force-directed methods. Moreover, graphael can layout and visualize graphs that evolve though time, using static views, animation, and morphing. The implementation includes a powerful interface that allows the user to put together existing algorithms and visualization techniques, and to easily add new ones. The system is written in Java and is available as a downloadable program or as an applet at http://graphael.cs.arizona.edu.',
      author:
        'Forrester, David and Kobourov, Stephen G and Navabi, Armand and Wampler, Kevin and Yee, Gary V',
      booktitle: 'Graph drawing',
      doi: '10.1007/978-3-540-31843-9_47',
      keywords:
        'type:technique, time:animation, paradigm:node-link, evaluation:case_study, force-directed_layout, offline_problem, mental_map, radial, 3d, application:document, general-purpose_layout',
      pages: '454--464',
      publisher: 'Springer',
      references: 'Erten2004Exploring',
      series: 'GD',
      title: '{graphael}: A system for generalized force-directed layouts',
      type: 'inproceedings',
      year: '2005',
    },
    Friedrich2001Marey: {
      abstract:
        'Enabling the user of a graph drawing system to preserve the mental map between two different layouts of a graph is a major problem. In this paper we present Marey, a system that can smoothly transform one drawing of a graph into another without any restrictions to the class of graphs or type of layout algorithm.',
      author: 'Friedrich, Carsten and Eades, Peter',
      booktitle: 'Graph Drawing',
      doi: '10.1007/3-540-44541-2_37',
      keywords:
        'type:technique, time:animation, paradigm:node-link, application:generic, evaluation:case_study, transition_problem, general-purpose_layout',
      pages: '396--406',
      publisher: 'Springer',
      series: 'GD',
      title: 'The {Marey} graph animation tool demo',
      type: 'inproceedings',
      year: '2001',
    },
    Friedrich2002Graph: {
      abstract:
        'Enabling the user of a graph drawing system to preserve the mental map between two different layouts of a graph is a major problem. In this paper we present methods that smoothly transform one drawing of a graph into another without any restrictions to the class of graphs or type of layout algorithm.',
      author: 'Friedrich, Carsten and Eades, Peter',
      doi: '10.7155/jgaa.00057',
      journal: 'Journal of Graph Algorithms and Applications',
      keywords:
        'type:technique, paradigm:node-link, time:animation, mental_map, evaluation:case_study, application:generic, transition_problem, general-purpose_layout',
      number: '3',
      pages: '353--370',
      title: 'Graph drawing in motion',
      type: 'article',
      volume: '6',
      year: '2002',
    },
    Friedrich2002GraphII: {
      abstract:
        'Enabling the user of a graph drawing system to preserve the mental map between two different layouts of a graph is a major problem. Whenever a layout in a graph drawing system is modified, the mental map of the user must be preserved. One way in which the user can be helped in understanding a change of layout is through animation of the change. In this paper, we present clustering-based strategies for identifying groups of nodes sharing a common, simple motion from initial layout to final layout. Transformation of these groups is then handled separately in order to generate a smooth animation.',
      author: 'Friedrich, Carsten and Houle, Michael E',
      booktitle: 'Graph Drawing',
      doi: '10.1007/3-540-45848-4_18',
      keywords:
        'type:technique, time:animation, paradigm:node-link, evaluation:case_study, application:generic, mental_map, clustering, transition_problem, general-purpose_layout',
      pages: '220--231',
      publisher: 'Springer',
      references: 'Friedrich2002Graph',
      series: 'GD',
      title: 'Graph Drawing in Motion {II}',
      type: 'inproceedings',
      year: '2002',
    },
    Frishman2004Dynamic: {
      abstract:
        'This paper presents an algorithm for drawing a sequence of graphs that contain an inherent grouping of their vertex set into clusters. It differs from previous work on dynamic graph drawing in the emphasis that is put on maintaining the clustered structure of the graph during incremental layout. The algorithm works online and allows arbitrary modifications to the graph. It is generic and can be implemented using a wide range of static force-directed graph layout tools. The paper introduces several metrics for measuring layout quality of dynamic clustered graphs. The performance of our algorithm is analyzed using these metrics. The algorithm has been successfully applied to visualizing mobile object software.',
      author: 'Frishman, Yaniv and Tal, Ayellet',
      booktitle:
        'Proceedings of the 2004 IEEE Symposium on Information Visualization',
      doi: '10.1109/INFVIS.2004.18',
      keywords:
        'time:animation, paradigm:node-link, online\\_problem, mental\\_map, evaluation:case\\_study, application:infrastructure, compound_graph, type:technique, force-directed\\_layout, 3d, application:software\\_engineering, evaluation:algorithmic, special-purpose_layout',
      pages: '191--198',
      publisher: 'IEEE',
      references: 'Misue1995Layout',
      series: 'InfoVis',
      title: 'Dynamic Drawing of Clustered Graphs',
      type: 'inproceedings',
      year: '2004',
    },
    Frishman2008MOVIS: {
      abstract:
        'This paper presents MOVIS---a system for visualizing mobile object frameworks. In such frameworks, the objects can migrate to remote hosts, along with their state and behavior, while the application is running. An innovative graph-based visualization is used to depict the physical and the logical connections in the distributed object network. Scalability is achieved by using a focus+context technique jointly with a user-steered clustering algorithm. In addition, an event synchronization model for mobile objects is presented. The system has been applied to visualizing several mobile object applications.',
      author: 'Frishman, Yaniv and Tal, Ayellet',
      doi: '10.1016/j.jvlc.2007.07.006',
      journal: 'Journal of Visual Languages \\& Computing',
      keywords:
        'type:application, compound_graph, 3d, paradigm:node-link, evaluation:case_study, time:animation, application:software_engineering, clustering, program_execution',
      number: '3',
      pages: '303--320',
      publisher: 'Elsevier',
      references:
        'Collberg2003System Frishman2004Dynamic Kumar2006Visual Misue1995Layout',
      title:
        '{MOVIS}: A system for visualizing distributed mobile object environments',
      type: 'article',
      volume: '19',
      year: '2008',
    },
    Frishman2008Online: {
      abstract:
        "This paper presents an algorithm for drawing a sequence of graphs online. The algorithm strives to maintain the global structure of the graph and, thus, the user's mental map while allowing arbitrary modifications between consecutive layouts. The algorithm works online and uses various execution culling methods in order to reduce the layout time and handle large dynamic graphs. Techniques for representing graphs on the GPU allow a speedup by a factor of up to 17 compared to the CPU implementation. The scalability of the algorithm across GPU generations is demonstrated. Applications of the algorithm to the visualization of discussion threads in Internet sites and to the visualization of social networks are provided.",
      author: 'Frishman, Yaniv and Tal, Ayellet',
      doi: '10.1109/tvcg.2008.11',
      issn: '1077-2626',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'paradigm:node-link, time:animation, online\\_problem, mental\\_map, type:technique, application:social, evaluation:algorithmic, evaluation:case\\_study, general-purpose_layout',
      number: '4',
      pages: '727--740',
      publisher: 'IEEE',
      references:
        'Misue1995Layout Kumar2006Visual Frishman2004Dynamic Bender-deMoll2006Science',
      series: 'TVCG',
      title: 'Online Dynamic Graph Drawing',
      type: 'article',
      volume: '14',
      year: '2008',
    },
    Fu2007Visualization: {
      abstract:
        'This paper presents various methods for visualization and analysis of email networks; visualization on the surface of a sphere to reveal communication patterns between different groups, a hierarchical drawing displaying the centrality analysis of nodes to emphasize important nodes, a 2.5D visualization for temporal email networks to analyze the evolution of email relationships changing over time, and an ambient display for finding social circles derived from the email network. Each method was evaluated with various data sets from a research organization. We also extended our method for visual analysis of an email virus network.',
      author:
        'Fu, Xiaoyan and Hong, Seok-Hee and Nikolov, Nikola S and Shen, Xiaobin and Wu, Yingxin and Xu, Kai',
      booktitle:
        'Proceedings of the 6th International Asia-Pacific Symposium on Visualization',
      doi: '10.1109/APVIS.2007.329302',
      keywords:
        'type:application, time:timeline, paradigm:node-link, application:social, evaluation:case_study, 3d, superimposed_node-link',
      pages: '1--8',
      publisher: 'IEEE',
      references: 'Moody2005Dynamic',
      series: 'APVis',
      title: 'Visualization and analysis of email networks',
      type: 'inproceedings',
      year: '2007',
    },
    Gaertler2006Hybrid: {
      abstract:
        'Dynamic processes frequently occur in many applications. Visualizations of dynamically evolving data, for example as part of the data analysis, are typically restricted to a cumulative static view or an animation/sequential view. Both methods have their benefits and are often complementary in their use. In this article, we present a hybrid model that combines the two techniques. This is accomplished by 2.5D drawings which are calculated in an incremental way. The method has been evaluated on collaboration networks.',
      author: 'Gaertler, Marco and Wagner, Dorothea',
      booktitle: 'Graph Drawing',
      doi: '10.1007/11618058_18',
      keywords:
        'type:technique, time:timeline, 3d, paradigm:node-link, evaluation:case_study, application:document',
      pages: '189--200',
      publisher: 'Springer',
      references: 'Brandes2003Visual',
      series: 'GD',
      title: 'A hybrid model for drawing dynamic and evolving graphs',
      type: 'inproceedings',
      year: '2006',
    },
    Gansner2013Interactive: {
      abstract:
        'The many endless rivers of text now available present a serious challenge in the task of gleaning, analyzing and discovering useful information. In this paper, we describe a methodology for visualizing a text stream in real-time, modeled as a dynamic graph and its derived map. The approach automatically groups similar messages into clusters displayed as "countries", with keyword summaries, using semantic analysis, graph clustering and map generation techniques. It handles the need for visual stability across time by dynamic graph layout and Procrustes projection, enhanced with a novel stable component packing algorithm. The result provides a continuous, succinct view of ever-changing topics of interest. To make these ideas concrete, we describe their application to an experimental web service called TwitterScope.',
      author: 'Gansner, Emden R. and Hu, Yifan and North, Stephen C',
      comment:
        'extended version of a paper that appeared at Graph Drawing 2012',
      doi: '10.7155/jgaa.00302',
      journal: 'Journal of Graph Algorithms and Applications',
      keywords:
        'type:application, paradigm:node-link, time:animation, evaluation:case\\_study, application:document, map\\_metaphor',
      number: '4',
      pages: '515--540',
      references: 'Archambault2011Animation',
      title:
        'Interactive Visualization of Streaming Text Data with Dynamic Maps',
      type: 'article',
      volume: '17',
      year: '2013',
    },
    Ghani2012Perception: {
      abstract:
        'Effective visualization of dynamic graphs remains an open research topic, and many state-of-the-art tools use animated node-link diagrams for this purpose. Despite its intuitiveness, the effectiveness of animation in node-link diagrams has been questioned, and several empirical studies have shown that animation is not necessarily superior to static visualizations. However, the exact mechanics of perceiving animated node-link diagrams are still unclear. In this paper, we study the impact of different dynamic graph metrics on user perception of the animation. After deriving candidate visual graph metrics, we perform an exploratory user study where participants are asked to reconstruct the event sequence in animated node-link diagrams. Based on these findings, we conduct a second user study where we investigate the most important visual metrics in depth. Our findings show that node speed and target separation are prominent visual metrics to predict the performance of event sequencing tasks.',
      author: 'Ghani, Sohaib and Elmqvist, Niklas and Yi, Ji Soo',
      doi: '10.1111/j.1467-8659.2012.03113.x',
      journal: 'Computer Graphics Forum',
      keywords:
        'time:animation, paradigm:node-link, type:evaluation, force-directed\\_layout, evaluation:user_study, application:generic, mental_map',
      number: '3pt3',
      pages: '1205--1214',
      publisher: 'Blackwell Publishing Ltd',
      references:
        'Archambault2011Animation Beck2009Aesthetic Brandes2003Visual Cohen1992Framework Farrugia2011Effective Moody2005Dynamic Yi2010TimeMatrix',
      series: 'CGF',
      title: 'Perception of Animated Node-Link Diagrams for Dynamic Graphs',
      type: 'article',
      volume: '31',
      year: '2012',
    },
    Gilbert2011Communities: {
      abstract:
        'Detection of community structures in social networks has attracted lots of attention in the domain of sociology and behavioral sciences. Social networks also exhibit dynamic nature as these networks change continuously with the passage of time. Social networks might also present a hierarchical structure led by individuals who play important roles in a society such as managers and decision makers. Detection and visualization of these networks that are changing over time is a challenging problem where communities change as a function of events taking place in the society and the role people play in it. In this paper, we address these issues by presenting a system to analyze dynamic social networks. The proposed system is based on dynamic graph discretization and graph clustering. The system allows detection of major structural changes taking place in social communities over time and reveals hierarchies by identifying influential people in social networks. We use two different data sets for the empirical evaluation and observe that our system helps to discover interesting facts about the social and hierarchical structures present in these social networks.',
      author:
        "Gilbert, Fr{\\'e}d{\\'e}ric and Simonetto, Paolo and Zaidi, Faraz and Jourdan, Fabien and Bourqui, Romain",
      doi: '10.1007/s13278-010-0002-8',
      journal: 'Social Network Analysis and Mining',
      keywords:
        'type:application, application:social, time:timeline, time:animation, evaluation:case_study, paradigm:node-link, force-directed_layout, compound_graph',
      number: '2',
      pages: '83--95',
      publisher: 'Springer',
      references: 'Bender-deMoll2006Science Kang2007Visual Moody2005Dynamic',
      title:
        'Communities and hierarchical structures in dynamic social networks: analysis and visualization',
      type: 'article',
      volume: '1',
      year: '2011',
    },
    Gorg2005Dynamic: {
      abstract:
        'In this paper we introduce two novel algorithms for drawing sequences of orthogonal and hierarchical graphs while preserving the mental map. Both algorithms can be parameterized to trade layout quality for dynamic stability. In particular, we had to develop new metrics which work upon the intermediate results of layout phases. We discuss some properties of the resulting animations by means of examples.',
      author:
        'G\\"org, Carsten and Birke, Peter and Pohl, Mathias and Diehl, Stephan',
      booktitle: 'Graph Drawing',
      doi: '10.1007/978-3-540-31843-9_24',
      keywords:
        'type:technique, paradigm:node-link, time:animation, orthogonal_layout, hierarchical_layout, evaluation:case_study, application:software_engineering, mental_map, offline_problem, general-purpose_layout',
      pages: '228--238',
      publisher: 'Springer',
      references: 'Cohen1995Dynamic Collberg2003System Diehl2001Preserving',
      series: 'GD',
      title:
        'Dynamic graph drawing of sequences of orthogonal and hierarchical graphs',
      type: 'inproceedings',
      year: '2005',
    },
    Gorochowski2012Using: {
      abstract:
        'Networks are widely used to describe many natural and technological systems. Understanding how these evolve over time poses a challenge for existing visualization techniques originally developed for fixed network structures. We describe a method of incorporating the concept of aging into evolving networks, where nodes and edges store information related to the amount of local evolutionary change they have experienced. This property is used to generate visualizations that ensure stable substructures maintain relatively fixed spatial positions, allowing them to act as visual markers and providing context for evolutionary change elsewhere. By further supplementing these visualizations with color cues, the resultant animations enable a clearer portrayal of the underlying evolutionary process.',
      author:
        'Gorochowski, Thomas E and di Bernardo, Mario and Grierson, Claire S',
      doi: '10.1109/TVCG.2011.142',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:technique, paradigm:node-link, time:animation, evaluation:algorithmic, application:generic, force-directed_layout, online_problem, general-purpose_layout',
      number: '8',
      pages: '1343--1352',
      publisher: 'IEEE',
      references:
        'Farrugia2011Effective Erten2004GraphAEL Erten2004Exploring Brandes2003Visual Friedrich2002Graph Misue1995Layout Lee2006Mental Moody2005Dynamic',
      series: 'TVCG',
      title:
        'Using Aging to Visually Uncover Evolutionary Processes on Networks',
      type: 'article',
      volume: '18',
      year: '2012',
    },
    Grabowicz2014Fast: {
      abstract:
        'Detecting and visualizing what are the most relevant changes in an evolving network is an open challenge in several domains. We present a fast algorithm that filters subsets of the strongest nodes and edges representing an evolving weighted graph and visualize it by either creating a movie, or by streaming it to an interactive network visualization tool. The algorithm is an approximation of exponential sliding time-window that scales linearly with the number of interactions. We compare the algorithm against rectangular and exponential sliding time-window methods. Our network filtering algorithm: (i) captures persistent trends in the structure of dynamic weighted networks, (ii) smoothens transitions between the snapshots of dynamic network, and (iii) uses limited memory and processor time. The algorithm is publicly available as open-source software.',
      author:
        'Grabowicz, Przemyslaw A and Aiello, Luca Maria and Menczer, Filippo',
      doi: '10.1140/epjds/s13688-014-0027-8',
      journal: 'EPJ Data Science',
      keywords:
        'type:technique, time:animation, paradigm:node-link, evaluation:case_study, online_problem, general-purpose_layout, force-directed_layout, time_aggregation, application:sports, application:document, application:media, social_media',
      number: '1',
      pages: '1--16',
      publisher: 'Springer',
      references:
        'Bastian2009Gephi Dutot2007GraphStream Brandes2012Visualization Yi2010TimeMatrix Stein2010PixelOriented Farrugia2011Effective Misue1995Layout Archambault2012Mental Ghani2012Perception Frishman2008Online Kumar2006Visual',
      title: 'Fast filtering and animation of large dynamic networks',
      type: 'article',
      volume: '3',
      year: '2014',
    },
    Greevy2006Visualizing: {
      abstract:
        'The analysis of the runtime behavior of a software system yields vast amounts of information, making accurate interpretations difficult. Filtering or compression techniques are often applied to reduce the volume of data without loss of key information vital for a specific analysis goal. Alternatively, visualization is generally accepted as a means of effectively representing large amounts of data. The challenge lies in creating effective and expressive visual representations that not only allows for a global picture, but also enables us to inspect the details of the large data sets. We define the focus of our analysis to be the runtime behavior of features. Static structural visualizations of a system are typically represented in two dimensions. We exploit a third dimension to visually represent the dynamic information, namely object instantiations and message sends. We introduce a novel 3D visualization technique that supports animation of feature behavior and integrates zooming, panning, rotating and on-demand details. As proof of concept, we apply our visualization technique to feature execution traces of an example system.',
      author: 'Greevy, Orla and Lanza, Michele and Wysseier, Christoph',
      booktitle:
        'Proceedings of the 2006 ACM Symposium on Software Visualization',
      doi: '10.1145/1148493.1148501',
      isbn: '1-59593-464-2',
      keywords:
        'type:application, paradigm:node-link, 3d, time:timeline, application:software\\_engineering, evaluation:case\\_study, program_execution',
      pages: '47--56',
      publisher: 'ACM',
      series: 'SoftVis',
      title: 'Visualizing live software systems in {3D}',
      type: 'inproceedings',
      year: '2006',
    },
    Greilich2009Visualizing: {
      abstract:
        'Compound digraphs are a widely used model in computer science. In many application domains these models evolve over time. Only few approaches to visualize such dynamic compound digraphs exist and mostly use animation to show the dynamics. In this paper we present a new visualization tool called TimeArcTrees that visualizes weighted, dynamic compound digraphs by drawing a sequence of node-link diagrams in a single view. Compactness is achieved by aligning the nodes of a graph vertically. Edge crossings are reduced by drawing upward and downward edges separately as colored arcs. Horizontal alignment of the instances of the same node in different graphs facilitates comparison of the graphs in the sequence. Many interaction techniques allow to explore the given graphs. Smooth animation supports the user to better track the transitions between views and to preserve his or her mental map. We illustrate the usefulness of the tool by looking at the particular problem of how shortest paths evolve over time. To this end, we applied the system to an evolving graph representing the German Autobahn and its traffic jams.',
      author: 'Greilich, Martin and Burch, Michael and Diehl, Stephan',
      doi: '10.1111/j.1467-8659.2009.01451.x',
      issn: '1467-8659',
      journal: 'Computer Graphics Forum',
      keywords:
        'paradigm:node-link, compound_graph, weighted_graph, directed_graph, time:timeline, evaluation:case\\_study, application:infrastructure, type:technique, linear\\_arrangement, juxtaposed_node-link, application:geo',
      number: '3',
      pages: '975--982',
      publisher: 'Blackwell Publishing',
      references: 'Pohl2008Interactive',
      series: 'CGF',
      'survey:data': '(n:30, e:700, t:7)',
      title:
        'Visualizing the Evolution of Compound Digraphs with {TimeArcTrees}',
      type: 'article',
      volume: '28',
      year: '2009',
    },
    Groh2009Interactively: {
      abstract:
        'The dynamic social network visualizer \u201cDySoN\u201d (Dynamic Social Networks) aims at understanding patterns and structural changes in dynamic social networks that evolve over time via an interactive visualization approach. As an alternative and supplementation to the numerous other approaches to visualization of social network data and as an attempt to overcome some of the drawbacks of these approaches, DySoN interactively visualizes streaming event data of social interactions by an interactive three-dimensional model of interpolated NURBS \u201dtubes\u201d, representing activity and social proximity within a given set of actors during a given time period by using three dimensions of temporal information mapping: spatial density (tube distance), tubecolor and tube-diameter. We use a self assembled large collaboration network of Jazz musicians with a straightforward  semantics for the computation of relation strengths for the evaluation of the approach. We also discuss applications of the concept for awareness services in mobile peer to peer social networks, which exhibit a vivid measurable social micro dynamics in time and space.',
      author: 'Groh, Georg and Hanstein, Holger and W\\"orndl, Wolfgang',
      booktitle:
        'Proceedings of the 2009 Workshop on Visual Interfaces to the Social and the Semantic Web',
      comment: 'a first version appeared at GI Jahrestagung 2008',
      keywords:
        'type:technique, paradigm:node-link, time:timeline, evaluation:case\\_study, application:social, 3d, superimposed_node-link, force-directed_layout',
      references:
        'Bender-deMoll2006Science Erten2004Exploring Friedrich2002Graph Moody2005Dynamic',
      series: 'VISSW',
      title: 'Interactively Visualizing Dynamic Social Networks with {DySoN}',
      type: 'inproceedings',
      url: 'http://data.semanticweb.org/workshop/VISSW/2009/paper/main/10/html',
      year: '2009',
    },
    Hadlak2011Situ: {
      abstract:
        "The analysis of large dynamic networks poses a challenge in many fields, ranging from large bot-nets to social networks. As dynamic networks exhibit different characteristics, e.g., being of sparse or dense structure, or having a continuous or discrete time line, a variety of visualization techniques have been specifically designed to handle these different aspects of network structure and time. This wide range of existing techniques is well justified, as rarely a single visualization is suitable to cover the entire visual analysis. Instead, visual representations are often switched in the course of the exploration of dynamic graphs as the focus of analysis shifts between the temporal and the structural aspects of the data. To support such a switching in a seamless and intuitive manner, we introduce the concept of in situ visualization- a novel strategy that tightly integrates existing visualization techniques for dynamic networks. It does so by allowing the user to interactively select in a base visualization a region for which a different visualization technique is then applied and embedded in the selection made. This permits to change the way a locally selected group of data items, such as nodes or time points, are shown - right in the place where they are positioned, thus supporting the user's overall mental map. Using this approach, a user can switch seamlessly between different visual representations to adapt a region of a base visualization to the specifics of the data within it or to the current analysis focus. This paper presents and discusses the in situ visualization strategy and its implications for dynamic graph visualization. Furthermore, it illustrates its usefulness by employing it for the visual exploration of dynamic networks from two different fields: model versioning and wireless mesh networks.",
      author: 'Hadlak, Steffen and Schulz, Hans-J\\"org and Schumann, Heidrun',
      doi: '10.1109/TVCG.2011.213',
      issn: '1077-2626',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:technique, paradigm:node-link, paradigm:matrix, evaluation:case\\_study, application:infrastructure, application:software\\_engineering, time:timeline, taxonomy, juxtaposed_node-link, integrated_node-link, time:animation, application:geo',
      number: '12',
      pages: '2334--2343',
      publisher: 'IEEE',
      references:
        'Bastian2009Gephi Brandes2003Visual Burch2008TimeRadarTrees Diehl2002Graphs Diehl2001Preserving Friedrich2001Marey Frishman2004Dynamic Frishman2008Online Gaertler2006Hybrid Purchase2007Important Saraiya2005Visualization Shi2011Dynamic',
      series: 'TVCG',
      title: 'In Situ Exploration of Large Dynamic Networks',
      type: 'article',
      volume: '17',
      year: '2011',
    },
    Hadlak2015Survey: {
      abstract:
        'Graph visualization is an important field in information visualization that is centered on the graphical display of graph-structured data. Yet real world data is rarely just graph-structured, but instead exhibits multiple facets, such as multivariate attributes, or spatial and temporal frames of reference. In an effort to display different facets of a graph, such a wealth of visualization techniques has been developed in the past that current surveys focus on a single additional facet only in order to enumerate and classify them. This report builds on existing graph visualization surveys for the four common facets of partitions, attributes, time, and space. It contributes a generic high-level categorization of faceted graph visualization that subsumes the existing classifications, which can be understood as facet-specific refinements of the resulting categories. Furthermore, it extends beyond existing surveys by applying the same categorization to graph visualizations with multiple facets. For each of the introduced categories and considered facets, this overview provides visualization examples to illustrate instances of their realization.',
      author:
        'Hadlak, Steffen and Schumann, Heidrun and Schulz, Hans-J\u00f6rg',
      booktitle: 'Eurographics Conference on Visualization (EuroVis) - STARs',
      doi: '10.2312/eurovisstar.20151109',
      keywords:
        'type:evaluation, evaluation:survey, time:generic, paradigm:generic, application:generic, taxonomy',
      publisher: 'The Eurographics Association',
      references:
        'Ahn2013Task Ahn2011Temporal Beck2014State Boyandin2012Qualitative Brandes2003Visual Burch2008TimeRadarTrees Brandes2012Visualization Bach2014GraphDiaries Curtis2012Enabling Diehl2001Preserving Frishman2004Dynamic Gaertler2006Hybrid Hurter2013Bundled Hadlak2011Situ Itoh2012Visualization John2011Constructing Kerracher2014Design Misue1995Layout Perer2012MatrixFlow Reitz2010Framework Rufiange2013DiffAni Rohrschneider2010Visual Saraiya2005Visualization Stein2010PixelOriented Shi2015Egocentric Vehlow2015State vandenElzen2013Dynamic Yi2010TimeMatrix',
      series: 'EuroVis',
      title: 'A Survey of Multi-faceted Graph Visualization',
      type: 'inproceedings',
      year: '2015',
    },
    Hayashi2013Initial: {
      abstract:
        'Microblogging services generate huge histories that suit animated visualization based on graph drawing, but response speeds are insufficient. This paper proposes an effective updating method for the real-time visualization of time varying data. We propose an initial positioning method by combining Additional Edge Resizing (AER) with Sorted Sequential Barycenter Merging (SSBM). AER resizes edges between existing nodes when new edges are added before updating the visualization. SSBM initially positions multiple new nodes sequentially through priority based on the degree of connections to the existing graph. The proposed method prevents a decrease in readability at data update and achieves fast convergence with high accuracy. Quantitative and qualitative evaluations using the energy function and RMSE are detailed along with some visualization results. A graph drawing tool based on HTML5 is also introduced as an implementation of the proposed method and present some use cases for twitter data.',
      author:
        'Hayashi, Aki and Matsubayashi, Tatsushi and Hoshide, Takahide and Uchiyama, Tadasu',
      booktitle:
        'Proceedings of the 17th International Conference on Information Visualisation',
      doi: '10.1109/IV.2013.57',
      keywords:
        'type:technique, time:animation, paradigm:node-link, online_problem, application:document, evaluation:algorithmic, general-purpose_layout',
      pages: '435-444',
      publisher: 'IEEE',
      references:
        'Archambault2011Animation Archambault2011Difference Diehl2002Graphs Frishman2008Online Gorg2005Dynamic Huang1998Online Itoh2012Visualization Moody2005Dynamic Reitz2009Focused',
      series: 'IV',
      title:
        'Initial Positioning Method for Online and Real-Time Dynamic Graph Drawing of Time Varying Data',
      type: 'inproceedings',
      year: '2013',
    },
    Hindle2007YARN: {
      abstract:
        'A problem that faces the study of software evolution is how to explore the aggregated and cumulative effects of changes that occur within a software system over time. In this paper we describe an approach to modeling, extracting, and animating the architectural evolution of a software system. We have built a prototype tool called YARN (yet another reverse-engineering narrative) that implements our approach; YARN mines the source code changes of the target system, and generates YARN "balls" (animations) that a viewer can unravel (watch). The animation is based on a static layout of the modules connected by animated edges that model the changing dependencies. The edges can be weighted by the number of dependencies or the importance of the change. We demonstrate our approach by visualizing the evolution of PostgreSQL DBMS.',
      author:
        'Hindle, Abram and Jiang, Zhen Ming and Koleilat, Walid and Godfrey, Michael W and Holt, Richard C',
      booktitle:
        '4th IEEE International Workshop on Visualizing Software for Understanding and Analysis',
      doi: '10.1109/VISSOF.2007.4290711',
      keywords:
        'type:application, application:software_engineering, software_evolution, time:animation, fixed_nodes, paradigm:node-link, radial, evaluation:case_study, weighted_graph, offline_problem, directed_graph',
      pages: '129--136',
      publisher: 'IEEE',
      references: 'Beyer2006Animated',
      series: 'VISSOFT',
      title: '{YARN}: Animating software evolution',
      type: 'inproceedings',
      year: '2007',
    },
    Hlawatsch2014Visual: {
      abstract:
        'We present a visual representation for dynamic, weighted graphs based on the concept of adjacency lists. Two orthogonal axes are used: one for all nodes of the displayed graph, the other for the corresponding links. Colors and labels are employed to identify the nodes. The usage of color allows us to scale the visualization to single pixel level for large graphs. In contrast to other techniques, we employ an asymmetric mapping that results in an aligned and compact representation of links. Our approach is independent of the specific properties of the graph to be visualized, but certain graphs and tasks benefit from the asymmetry. As we show in our results, the strength of our technique is the visualization of dynamic graphs. In particular, sparse graphs benefit from the compact representation. Furthermore, our approach uses visual encoding by size to represent weights and therefore allows easy quantification and comparison. We evaluate our approach in a quantitative user study that confirms the suitability for dynamic and weighted graphs. Finally, we demonstrate our approach for two examples of dynamic graphs.',
      author: 'Hlawatsch, Marcel and Burch, Michael and Weiskopf, Daniel',
      doi: '10.1109/TVCG.2014.2322594',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:technique, paradigm:list, time:timeline, evaluation:user_study, application:social, application:software_engineering, weighted_graph, evaluation:case_study, directed_graph, linear_arrangement',
      pages: '1590--1603',
      publisher: 'IEEE',
      references:
        'Burch2011Parallel Yi2010TimeMatrix Frishman2008Online Lee2006Mental Beck2009Aesthetic Misue1995Layout Hu2012Embedding Archambault2011Animation Greilich2009Visualizing Brandes2003Visual Rufiange2013DiffAni Burch2008TimeRadarTrees',
      series: 'TVCG',
      title: 'Visual Adjacency Lists for Dynamic Graphs',
      type: 'article',
      year: '2014',
    },
    Hong2014Framework: {
      abstract:
        'In this paper, we present a framework for visual analytics of massive complex networks. Our framework is based on the tight integration of network analysis methods with visualization methods to address the scalability and complexity. We present case studies using various networks derived from the WoS (Web of Science). More specifically, we integrated co-citation analysis of Social Network community with 2.5D visualization methods to provide insight and overview on temporal dynamics. Furthermore, we derived collaboration networks and citation networks of Graph Drawing community and visualized using Anchored map techniques to understand collaboration patterns between important researchers in the community.',
      author:
        'Hong, Seok-Hee and Huang, Weidong and Misue, Kazuo and Quan, Wu and others',
      booktitle:
        '2014 International Conference on Big Data and Smart Computing',
      doi: '10.1109/BIGCOMP.2014.6741399',
      keywords:
        'type:application, application:social, application:document, paradigm:node-link, time:timeline, 3d, evaluation:case_study, weighted_graph, fixed_nodes',
      organization: 'IEEE',
      pages: '22--28',
      references: 'Fu2007Visualization',
      series: 'BIGCOMP',
      title: 'A framework for visual analytics of massive complex networks',
      type: 'inproceedings',
      year: '2014',
    },
    Hu2012Embedding: {
      abstract:
        'We describe a practical approach for visualizing multiple relationships defined on the same dataset using a geographic map metaphor, where clusters of nodes form countries and neighboring countries correspond to nearby clusters. Our aim is to provide a visualization that allows us to compare two or more such maps (showing an evolving dynamic process, or obtained using different relationships). In the case where we are considering multiple relationships, e.g., different similarity metrics, we also provide an interactive tool to visually explore the effect of combining two or more such relationships. Our method ensures good readability and mental map preservation, based on dynamic node placement with node stability, dynamic clustering with cluster stability, and dynamic coloring with color stability.',
      author: 'Hu, Yifan and Kobourov, Stephen G and Veeramoni, Sankar',
      booktitle: 'Proceedings of the 2012 IEEE Pacific Visualization Symposium',
      doi: '10.1109/PacificVis.2012.6183571',
      isbn: '978-1-4673-0863-2',
      keywords:
        'map\\_metaphor, type:technique, time:animation, omitted_links, clustering, paradigm:node-link, mental_map, evaluation:case_study, application:generic, special-purpose_layout, compound_graph',
      pages: '33--40',
      publisher: 'IEEE Computer Society',
      references: 'Burch2008TimeRadarTrees',
      series: 'PacificVis',
      title: 'Embedding, Clustering and Coloring for Dynamic Maps',
      type: 'inproceedings',
      year: '2012',
    },
    Huang1998Online: {
      abstract:
        'On-line graph drawing deals with huge graphs which are partially unknown. At any time, a tiny part of the graph is displayed on the screen. Examples include web graphs and graphs of links in distributed file systems. This paper discusses issues arising in the presentation of such graphs. The paper describes a system for dealing with web graphs using on-line graph drawing.',
      author: 'Huang, Mao Lin and Eades, Peter and Wang, Junhu',
      doi: '10.1006/jvlc.1998.0094',
      journal: 'Journal of Visual Languages \\& Computing',
      keywords:
        'paradigm:node-link, type:technique, time:animation, online_problem, mental_map, force-directed_layout, evaluation:case_study, application:document, transition_problem, general-purpose_layout',
      number: '6',
      pages: '623--645',
      publisher: 'Elsevier',
      references: 'Misue1995Layout',
      title:
        'On-line animated visualization of huge graphs using a modified spring algorithm',
      type: 'article',
      volume: '9',
      year: '1998',
    },
    Hurter2013Bundled: {
      abstract:
        'Depicting change captured by dynamic graphs and temporal paths, or trails, is hard. We present two techniques for simplified visualization of such datasets using edge bundles. The first technique uses an efficient image-based bundling method to create smoothly changing bundles from streaming graphs. The second technique adds edge-correspondence data atop of any static bundling algorithm, and is best suited for graph sequences. We show how these techniques can produce simplified visualizations of streaming and sequence graphs. Next, we show how several temporal attributes can be added atop of our dynamic graphs. We illustrate our techniques with datasets from aircraft monitoring, software engineering, and eye-tracking of static and dynamic scenes.',
      author:
        'Hurter, Christophe and Ersoy, Ozan and Fabrikant, Sara I and Klein, Tijmen and Telea, Alexandru',
      comment: 'extended version of a PacificVis 2013 paper',
      doi: '10.1109/TVCG.2013.246',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:technique, paradigm:node-link, edge\\_bundling, time:animation, evaluation:case\\_study, application:eye\\_tracking, application:software\\_engineering, application:infrastructure, fixed_nodes, transition_problem, general-purpose_layout, application:geo',
      publisher: 'IEEE',
      references:
        'Boyandin2012Qualitative Burch2008TimeRadarTrees Erten2004Simultaneous Forrester2005graphael',
      series: 'TVCG',
      title: 'Bundled Visualization of Dynamic Graph and Trail Data',
      type: 'article',
      year: '2013',
    },
    Itoh2010Interactive: {
      abstract:
        'We propose an interactive framework for the 3D visualization of the time-series of Web graphs. The purpose of our framework is to enable users to examine the evolution of Web graphs by comparing multiple graphs that have different timings and topics. To achieve this, we provide TimeSlices that are 2D planes to visualize Web graphs in a 3D environment. Users can interactively add new TimeSlices along the timeline, and they can manipulate them to animate Web graphs. Visualized Web graphs on TimeSlices are snapshots of different timings. Moreover, we provide mechanisms to generate and manipulate overlay views and parallel views in the 3D environment to enable Web graphs to be compared. Users can seamlessly change these viewing modes. Our system can also visualize two Web graphs created from different keywords to display the evolutional correlation between them. This system enables us to observe structural and temporal changes in multiple Web graphs such as shifts in influential blogs or power shifts in the diffusion of blogs between topics.',
      author: 'Itoh, Masahiko and Toyoda, Masashi and Kitsuregawa, Masaru',
      booktitle:
        'Proceedings of the 14th International Conference on Information Visualisation',
      doi: '10.1109/IV.2010.18',
      keywords:
        '3d, type:technique, paradigm:node-link, time:timeline, evaluation:none, application:document, superimposed_node-link',
      pages: '54--60',
      publisher: 'IEEE',
      references: 'Toyoda2005System Brandes2003Visual',
      series: 'IV',
      title:
        'An Interactive Visualization Framework for Time-Series of Web Graphs in a {3D} Environment',
      type: 'inproceedings',
      year: '2010',
    },
    Itoh2012Analysis: {
      abstract:
        "Social media such as blogs and microblogs enable users to easily and rapidly publish information on their personal activities and interests. They are considered to provide valuable information from the viewpoints of sociology, linguistics, and marketing. This paper proposes a novel system for analyzing temporal changes in the activities and interests of bloggers through a 3D visualization of phrase dependency structures in sentences. We first extract events that represent bloggers' activities and interests through analyzing the phrase dependencies of sentences in a blog archive. We roughly categorize the retrieved events according to the thematic roles (such as the experiencer, agent, and location) of the noun within the events, and then store them in a dependency database so that we can retrieve events that involve a given topic. Second, we present a 3D visualization framework for exploring temporal changes in events related to a topic. Our framework enables users to find events about a topic that appear within a specific timing, and drill down details of the events. It also enables users to compare events with different timings and/or on multiple topics. Moreover, it allows them to observe an overview of temporal changes in sets of events, and long-term changes in the frequency of events to assist users in finding trends. We implement the proposed system on our own five-year blog archive that focused on Japanese, and we report the usefulness of our system by using various examples.",
      author:
        'Itoh, Masahiko and Yoshinaga, Naoki and Toyoda, Masashi and Kitsuregawa, Masaru',
      booktitle: 'Proceeding of the 2012 IEEE Pacific Visualization Symposium',
      doi: '10.1109/PacificVis.2012.6183574',
      keywords:
        'type:application, paradigm:node-link, time:timeline, evaluation:case\\_study, application:social, social_media',
      organization: 'IEEE',
      pages: '57--64',
      references: 'Brandes2003Visual Itoh2010Interactive Toyoda2005System',
      series: 'PacificVis',
      title:
        "Analysis and Visualization of Temporal Changes in Bloggers' Activities and Interests",
      type: 'inproceedings',
      year: '2012',
    },
    Itoh2012Visualization: {
      abstract:
        'A huge number of historical documents that have been accumulated for a long time are currently being digitized. However, it is difficult for us to analyze and obtain insight into the past from such documents. This paper proposes an interactive visualization system to extract networks of historical figures from historical data and to show time-varying changes in their relationships. It enables users to explore changes in the structure of the network interactively. Moreover, it extracts characteristics of each relationship, such as hostile or friendly relations, and visualizes them on the network. It enables us to understand changes in past society better by exploring changes in relationships between people.',
      author: 'Itoh, Masahiko and Akaishi, Mina',
      booktitle:
        'Proceedings of the 16th International Conference on Information Visualisation',
      doi: '10.1109/IV.2012.55',
      issn: '1550-6037',
      keywords:
        'application:social, paradigm:node-link, time:timeline, evaluation:case\\_study, type:application, social_media',
      pages: '283-290',
      publisher: 'IEEE',
      references: 'Itoh2010Interactive Shi2011Dynamic',
      series: 'IV',
      title:
        'Visualizing for Changes in Relationships between Historical Figures in Chronicles',
      type: 'inproceedings',
      year: '2012',
    },
    John2011Constructing: {
      abstract:
        'The \u03c0-calculus, in particular its stochastic version the stochastic \u03c0-calculus, is a common modeling formalism to concisely describe the chemical reactions occurring in biochemical systems. However, it remains largely unexplored how to transform a biochemical model expressed in the stochastic \u03c0-calculus back into a set of meaningful reactions. To this end, we present a two step approach of first translating model states to reaction sets and then visualizing sequences of reaction sets, which are obtained from state trajectories, in terms of reaction networks. Our translation from model states to reaction sets is formally defined and shown to be correct, in the sense that it reflects the states and transitions as they are derived from the continuous time Markov chain-semantics of the stochastic \u03c0-calculus. Our visualization concept combines high level measures of network complexity with interactive, table-based network visualizations. It directly reflects the structures introduced in the first step and allows modelers to explore the resulting simulation traces by providing both: an overview of a network\u2019s evolution and a detail inspection on demand.',
      author:
        'John, Mathias and Schulz, Hans-J\\"org and Schumann, Heidrun and Uhrmacher, Adelinde M and Unger, Andrea',
      doi: '10.1007/s00165-011-0209-0',
      journal: 'Formal Aspects of Computing',
      keywords:
        'type:application, paradigm:node-link, time:timeline, application:biology, evaluation:case\\_study',
      number: '5',
      pages: '723-742',
      publisher: 'Springer',
      title:
        'Constructing and Visualizing Chemical Reaction Networks From Pi-Calculus Models',
      type: 'article',
      volume: '25',
      year: '2012',
    },
    Kang2007Visual: {
      abstract:
        'C-Group is a tool for analyzing dynamic group membership in temporal social networks over time. Unlike most network visualization tools, which show the group structure within an entire network, or the group membership for a single actor, C-Group allows users to focus their analysis on a pair of individuals. While C-Group allows for viewing the addition and deletion of nodes (actors) and edges (relationships) over time, its major contribution is its focus on changing group memberships over time. By doing so, users can investigate the context of temporal group memberships for the pair. C-Group provides users with a flexible interface for defining (and redefining) groups interactively, and supports two novel visual representations of the evolving group memberships. This flexibility gives users alternate views that are appropriate for different network sizes and provides users with different insights into the grouping behavior. We demonstrate the utility of the tool on a scientific publication network.',
      author: 'Kang, Hyunmo and Getoor, Lise and Singh, Lisa',
      doi: '10.1145/1345448.1345452',
      journal: 'ACM SIGKDD Explorations Newsletter',
      keywords:
        'type:application, time:animation, paradigm:node-link, application:social, evaluation:case_study, weighted_graph, bipartite',
      number: '2',
      pages: '13--21',
      publisher: 'ACM',
      references: 'Bender-deMoll2006Science Moody2005Dynamic',
      title:
        'Visual analysis of dynamic group membership in temporal social networks',
      type: 'article',
      volume: '9',
      year: '2007',
    },
    Kerracher2014Design: {
      abstract:
        'This paper presents our work in mapping the design space of techniques for temporal graph visualisation. We identify two independent dimensions upon which the techniques can be classified: graph structural encoding and temporal encoding. Based on these dimensions, we create a matrix into which we organise existing techniques. We identify gaps in this design space which may prove interesting opportunities for the development of novel techniques. We also consider additional dimensions on which further useful classification could be made. In organising the disparate existing approaches from a wide range of domains, our classification will assist those new to the research area, and designers and evaluators developing systems for temporal graph data by raising awareness of the range of possible approaches available, and highlighting possible directions for further research.',
      author: 'Kerracher, Natalie and Kennedy, Jessie and Chalmers, Kevin',
      booktitle: 'EuroVis - Short Papers',
      doi: '10.2312/eurovisshort.20141149',
      keywords:
        'evaluation:survey, type:evaluation, time:generic, paradigm:generic, application:generic, taxonomy',
      pages: '7--11',
      publisher: 'Eurographics Assocation',
      references:
        'Archambault2011Animation Bender-deMoll2006Science Bach2014GraphDiaries Bach2014Visualizing Federico2011Visual Farrugia2011Exploring Farrugia2011Effective Frishman2008Online Groh2009Interactively Hadlak2011Situ Itoh2010Interactive Moody2005Dynamic Perer2012MatrixFlow Rufiange2013DiffAni Reitz2009Focused Saraiya2005Visualization Shi2011Dynamic Yi2010TimeMatrix Kerracher2015Task',
      title: 'The Design Space of Temporal Graph Visualisation',
      type: 'inproceedings',
      year: '2014',
    },
    Kerracher2015Task: {
      abstract:
        'By extending and instantiating an existing formal task framework, we define a task taxonomy and task design space for temporal graph visualisation. We discuss the process involved in their generation, and describe how the design space can be \u2018sliced and diced\u2019 into multiple overlapping task categories, requiring distinct visual techniques for their support. The approach addresses deficiencies in the task literature, offering domain independence, greater task coverage, and unambiguous task specification. The taxonomy and design space capture tasks for temporal graphs, and also static graphs, multivariate graphs, and graph comparison, and will be of value in the design and evaluation of temporal graph visualisation systems.',
      author: 'Kerracher, Natalie and Kennedy, Jessie and Chalmers, Kevin',
      doi: '10.1109/TVCG.2015.2424889',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:evaluation, evaluation:survey, tasks, taxonomy, time:generic, paradigm:generic, application:generic',
      publisher: 'IEEE',
      references:
        'Ahn2013Task Yi2010TimeMatrix Bach2014GraphDiaries Kerracher2014Design Kang2007Visual Archambault2011Animation Farrugia2011Effective Beck2013Matching',
      series: 'TVCG',
      title: 'A Task Taxonomy for Temporal Graph Visualisation',
      type: 'article',
      year: '2015',
    },
    Kerracher2015Visual: {
      abstract:
        'Recently, much research has focused on developing techniques for the visual representation of temporal graph data. This paper takes a wider look at the visual techniques involved in exploratory analysis of such data, considering the variety of sub tasks and contextual tasks required to understand change in a graph over time, and the visual techniques which are able to support these tasks. In so doing, we highlight a number of tasks which are less well supported by existing techniques, which could prove worthwhile avenues for future research.',
      author:
        'Kerracher, Natalie and Kennedy, Jessie and Chalmers, Kevin and Graham, Martin',
      booktitle:
        'Eurographics Conference on Visualization (EuroVis) - Short Papers',
      doi: '10.2312/eurovisshort.20151133',
      keywords:
        'type:evaluation, evaluation:survey, time:generic, paradigm:generic, application:generic, tasks, taxonomy',
      publisher: 'The Eurographics Association',
      references:
        'Ahn2011Temporal Beck2014State Bach2014Visualizing Bach2014GraphDiaries Farrugia2011Exploring Itoh2010Interactive Kerracher2014Design Kerracher2015Task Perer2012MatrixFlow Yi2010TimeMatrix Zaman2011Effect',
      series: 'EuroVis',
      title:
        '{Visual Techniques to Support Exploratory Analysis of Temporal Graph Data}',
      type: 'inproceedings',
      year: '2015',
    },
    Kimelman1995Reduction: {
      abstract:
        'Graphs are used extensively in software visualization to represent both static aspects of software structure and dynamic aspects of execution-time behavior. However, for realistic subject software systems, there are far too many nodes and edges in the displayed graphs to be comprehensible to an end user. Further, for presentation of dynamics, continual change and redisplay of such large graphs is too demanding for conventional workstation computational resources. This paper poses the problem of \u201creduction\u201d or \u201cabstraction\u201d in dynamically changing graphs, and proposes a combination of techniques that can be used to reduce the visual complexity of a graph, without obscuring the significant information that it was meant to convey. The abstract graph can be comprehended more readily and it changes far less frequently than the full graph. As well, when the abstract graph does change, it requires far less computation for layout and redisplay. These abstraction techniques are illustrated by way of examples showing their use in systems for visualization of object-oriented and multi-layer software systems.',
      author: 'Kimelman, Doug and Leban, Bruce and Roth, Tova and Zernik, Dror',
      booktitle: 'Graph Drawing',
      doi: '10.1007/3-540-58950-3_373',
      keywords:
        'type:application, time:generic, paradigm:generic, application:software_engineering, program_execution, evaluation:case_study',
      pages: '218--225',
      publisher: 'Springer',
      series: 'GD',
      title: 'Reduction of visual complexity in dynamic graphs',
      type: 'inproceedings',
      year: '1995',
    },
    Kobourov2013Force: {
      abstract:
        "Force-directed algorithms are among the most flexible methods for calculating layouts of simple undirected graphs. Also known as spring embedders, such algorithms calculate the layout of a graph using only information contained within the structure of the graph itself, rather than relying on domain-specific knowledge. Graphs drawn with these algorithms tend to be aesthetically pleasing, exhibit symmetries, and tend to produce crossing-free layouts for planar graphs. In this survey we consider several classical algorithms, starting from Tutte's 1963 barycentric method, and including recent scalable multiscale methods for large and dynamic graphs.",
      author: 'Kobourov, Stephen G',
      booktitle: 'Handbook of Graph Drawing and Visualization',
      keywords:
        'type:evaluation, paradigm:node-link, force-directed\\_layout, time:animation, evaluation:survey, application:generic',
      pages: '383--408',
      publisher: 'CRC',
      references:
        'Cohen1992Framework Cohen1995Dynamic Collberg2003System Erten2004Exploring Bastian2009Gephi Forrester2005graphael',
      title: 'Force-directed drawing algorithms',
      type: 'incollection',
      url: 'https://cs.brown.edu/~rt/gdhandbook/',
      year: '2013',
    },
    Kumar2006Visual: {
      abstract:
        'Quasi-trees, namely graphs with tree-like structure, appear in many application domains, including bioinformatics and computer networks. Our new SPF approach exploits the structure of these graphs with a two-level approach to drawing, where the graph is decomposed into a tree of biconnected components. The low-level biconnected components are drawn with a force-directed approach that uses a spanning tree skeleton as a starting point for the layout. The higher-level structure of the graph is a true tree with meta-nodes of variable size that contain each biconnected component. That tree is drawn with a new area-aware variant of a tree drawing algorithm that handles high-degree nodes gracefully, at the cost of allowing edge-node overlaps. SPF performs an order of magnitude faster than the best previous approaches, while producing drawings of commensurate or improved quality',
      author: 'Kumar, Gautam and Garland, Michael',
      doi: '10.1109/tvcg.2006.193',
      issn: '1077-2626',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'force-directed\\_layout, clustering, paradigm:node-link, time:animation, evaluation:case\\_study, application:business, application:biology, type:technique, compound_graph, offline\\_problem, mental\\_map, weighted_graph, special-purpose_layout',
      number: '5',
      pages: '805--812',
      series: 'TVCG',
      title: 'Visual Exploration of Complex Time-Varying Graphs',
      type: 'article',
      volume: '12',
      year: '2006',
    },
    Lad2006Visualizing: {
      abstract:
        "Today's Internet provides a global data delivery service to millions of end users and routing protocols play a critical role in this service. It is important to be able to identify and diagnose any problems occurring in Internet routing. However, the Internet's sheer size makes this task difficult. One cannot easily extract out the most important or relevant routing information from the large amounts of data collected from multiple routers. To tackle this problem, we have developed Link-Rank, a tool to visualize Internet routing changes at the global scale. Link-Rank weighs links in a topological graph by the number of routes carried over each link and visually captures changes in link weights in the form of a topological graph with adjustable size. Using Link-Rank, network operators can easily observe important routing changes from massive amounts of routing data, discover otherwise unnoticed routing problems, understand the impact of topological events, and infer root causes of observed routing changes.",
      author: 'Lad, Mohit and Massey, Daniel and Zhang, Lixia',
      doi: '10.1109/TVCG.2006.108',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:application, time:timeline, paradigm:node-link, evaluation:case_study, application:infrastructure',
      number: '6',
      pages: '1450--1460',
      publisher: 'IEEE',
      series: 'TVCG',
      title: 'Visualizing internet routing changes',
      type: 'article',
      volume: '12',
      year: '2006',
    },
    Lee2006Mental: {
      abstract:
        'Information visualization has attracted much attention in recent years in many fields of science and engineering. In many applications, graphs are \'dynamic\' in the sense that changes are constantly applied to a graph to reflect the evolution of the system behaviour represented by the graph. In the past, the concept of the so-called "mental map" has largely been ignored. Users often have to spend a lot of time relearning the redrawn graphs. This paper proposes an effective way to release the user from such kind of a distasteful job by maintaining a high degree of the "mental map" for general graphs when graphs are redrawn. Our experimental results suggest this new approach to be promising.',
      author: 'Lee, Yi-Yi and Lin, Chun-Cheng and Yen, Hsu-Chun',
      booktitle:
        'Proceedings of the 2006 Asia-Pacific Symposium on Information Visualisation',
      keywords:
        'type:technique, paradigm:node-link, mental_map, time:animation, evaluation:case_study, application:generic, online_problem, general-purpose_layout',
      pages: '179--188',
      publisher: 'Australian Computer Society, Inc.',
      references: 'Misue1995Layout',
      series: 'APVis',
      title: 'Mental map preserving graph drawing using simulated annealing',
      type: 'inproceedings',
      year: '2006',
    },
    Li2013Visual: {
      abstract:
        'As a novel type of real-time social networking service, microblogging has already become ubiquitous and an irreplaceable tool. Tracking in the pulse of retweeting propagation is important and meaningful. In this paper, we investigate how information propagation in a specific microblogging platform evolves to identify relevant patterns and understand dynamic attributes of information propagation and the underlying sociological motivations. More specifically, based on the node-link diagram, we propose three efficient strategies to map the multiple attributes of information propagation graph to appropriate visual elements. For revealing the dynamic attributes, we propose two models: the depth-varying and the time-varying parallel data model to illustrate the temporal evolution efficiently. We also present a novel method by combining the traditional scatter plot with Hough transformation to represent the distribution of propagation instances and trace the propagation speeds. We integrate our methods to a visual mining tool and develop several interactive features. We demonstrate how our approaches improve the understanding of the propagation graph from a visual perspective by employing propagation datasets collected from Sina Weibo, the largest microblogging service provider in mainland China. Meanwhile, this visual mining tool has been evaluated by data analysts and successfully used in Sina Corporation as a helpful assistant to them.',
      author:
        'Li, Quan and Qu, Huamin and Chen, Li and Wang, Robert and Yong, Junhai and Si, Detan',
      booktitle:
        'Proceedings of the 6th International Symposium on Visual Information Communication and Interaction',
      doi: '10.1145/2493102.2493108',
      keywords:
        'type:application, time:timeline, time:animation, evaluation:expert, paradigm:node-link, social_media, application:social',
      organization: 'ACM',
      pages: '44--53',
      references:
        'Burch2011Parallel Diehl2002Graphs Frishman2008Online Gorg2005Dynamic',
      series: 'VINCI',
      title:
        'Visual analysis of retweeting propagation network in a microblogging platform',
      type: 'inproceedings',
      year: '2013',
    },
    Liao2013Visual: {
      abstract:
        'The amount of information flowing across communication networks has rapidly increased. The highly dynamic and complex networks, represented as large graphs, make the analysis of such networks increasingly challenging. In this paper, we provide a brief overview of several useful visualization techniques for the analysis of spatiotemporal anomalies in large-scale networks. We make use of community-based similarity graphs (CSGs), temporal expansion model graphs (TEMGs), correlation graphs (CGs), high-dimension projection graphs (HDPGs), and topology-preserving compressed graphs (TPCGs). CSG is used to detect anomalies based on community membership changes rather than individual nodes and edges and therefore may be more tolerant to the highly dynamic nature of large networks. TEMG transforms network topologies into directed trees so that efficient search is more likely to be performed for anomalous changes in network behavior and routing topology in large dynamic networks. CG and HDPG are used to examine the complex relationship of data dimensions among graph nodes through transformation in a high-dimensional space. TPCG groups nodes with similar neighbor sets into mega-nodes, thus making graph visualization and analysis more scalable to large networks. All the methods target efficient large-graph anomaly visualization from different perspectives and together provide valuable insights.',
      author: 'Liao, Qi and Shi, Lei and Wang, Chen',
      doi: '10.1147/JRD.2013.2249356',
      journal: 'IBM Journal of Research and Development',
      keywords:
        'type:application, paradigm:node-link, application:infrastructure, evaluation:case_study, time:timeline',
      number: '3/4',
      pages: '13:1-13:12',
      publisher: 'IBM',
      title: 'Visual analysis of large-scale network anomalies',
      type: 'article',
      volume: '57',
      year: '2013',
    },
    Lin2010ContexTour: {
      abstract:
        'Huge amounts of rich context social network data are generated everyday from various applications such as FaceBook and Twitter. These data involve multiple social relations which are community-driven and dynamic in nature. The complex interplay of these characteristics poses tremendous challenges on the users who try to understand the underlying patterns in the social media. We introduce an exploratory analytical framework, ContexTour, which generates visual representations for exploring multiple dimensions of community activities, including relevant topics, representative users and the community-generated content, as well as their evolutions. ContexTour consists of two novel and complementary components: (1) Dynamic Relational Clustering (DRC) that efficiently tracks the community evolution and smoothly adapts to the community changes, and (2) Dynamic Network Contour-map (DNC) that visualizes the community activities and evolutions in various dimensions. In our experiments, we demonstrate ContexTour through case studies on the DBLP dataset. The visual results capture interesting and reasonable evolution in Computer Science research communities. Quantitatively, we show 85-165X performance gain of our DRC algorithm over the baseline method.',
      author: 'Lin, Yu-Ru and Sun, Jimeng and Cao, Nan and Liu, Shixia',
      booktitle:
        'Proceedings of the 2010 SIAM International Conference on Data Mining',
      doi: '10.1137/1.9781611972801.37',
      keywords:
        'mental\\_map, compound_graph, clustering, type:technique, paradigm:node-link, map\\_metaphor, time:animation, evaluation:case\\_study, evaluation:algorithmic, application:document, special-purpose_layout',
      pages: '418--429',
      references: 'Kumar2006Visual',
      series: 'SDM',
      title:
        '{ContexTour}: Contextual Contour Visual Analysis on Dynamic Multi-Relational Clustering',
      type: 'inproceedings',
      year: '2010',
    },
    Loubier2008Temporal: {
      abstract:
        'This article presents a tool namely VisuGraph, designed to support temporal data visualization by means of graph representation that offers users a synthetic view of knowledge, difficult to extract from a data corpus. The temporal dimension adds the possibility to situate past, but also present or future events and strategies. In this context, we propose a graph-morphing algorithm in order to highlight major tendencies and significant data changes during different periods of time. The goal is to present an animation based on a graph of temporal data, with every period pooled, followed up by each period graph successively. Our approach is based on a space-time analogy like for a clock. For each period, we propose to design a temporal mark, represented in a chronological order in the extremities of the visualization frame, like the hours on a clock. Each element of data is placed near the temporal marks according to its presence during each period. Thus, visualization of the successive periods makes it possible to detect persisting or temporary data and to detect a chronology in the changes in relations.',
      author: 'Loubier, Elo\\"ise and Dousset, Bernard',
      journal: 'Safety and Reliability for Managing Risk',
      keywords:
        'type:technique, paradigm:node-link, time:animation, force-directed_layout, evaluation:case_study, offline_problem, application:document, general-purpose_layout, transition_problem',
      number: '02',
      pages: '2008--16',
      references: 'Collberg2003System',
      series: 'ESREL',
      title: 'Temporal and relational data representation by graph morphing',
      type: 'article',
      volume: '14',
      year: '2008',
    },
    Ma2015Visualizing: {
      abstract:
        'Dynamic network visualization has been a challenging topic for dynamic networks analysis, especially for spatially embedded networks like brain networks. In this paper, we present an animated interactive visualization design that combines enhanced node-link diagrams and distance matrix layouts to assist neuroscientists in their exploration of dynamic brain networks and that enables them to understand how functional connections relate to the spatial structure of the brain. Our visualization also provides the ability to observe the evolution of a network, the change in the community identities, and node behavior over time.',
      author:
        'Ma, Chihua and Kenyon, Robert V. and Forbes, Angus G. and Berger-Wolf, Tanya and Slater, Bernard J. and Llano, Daniel A.',
      booktitle:
        'Eurographics Conference on Visualization (EuroVis) - Short Papers',
      doi: '10.2312/eurovisshort.20151128',
      keywords:
        'type:application, time:animation, paradigm:matrix, paradigm:node-link, application:biology, evaluation:case_study, weighted_graph, graph_difference',
      publisher: 'The Eurographics Association',
      references:
        'Archambault2011Animation Bastian2009Gephi Moody2005Dynamic Vehlow2014Visualizing',
      series: 'EuroVis',
      title:
        '{Visualizing Dynamic Brain Networks Using an Animated Dual-Representation}',
      type: 'inproceedings',
      year: '2015',
    },
    Mashima2012Visualizing: {
      abstract:
        'Maps offer a familiar way to present geographic data (continents, countries), and additional information (topography, geology), can be displayed with the help of contours and heat-map overlays. In this paper, we consider visualizing large-scale dynamic relational data by taking advantage of the geographic map metaphor. We describe a map-based visualization system which uses animation to convey dynamics in large data sets, and which aims to preserve the viewer\u2019s mental map while also offering readable views at all times. Our system is fully functional and has been used to visualize user traffic on the Internet radio station last.fm, as well as TV-viewing patterns from an IPTV service. All map images in this paper are available in high-resolution at [1] as are several movies illustrating the dynamic visualization.',
      author: 'Mashima, Daisuke and Kobourov, Stephen G and Hu, Yifan',
      doi: '10.1109/TVCG.2011.288',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'map\\_metaphor, mental\\_map, type:technique, paradigm:node-link, time:animation, evaluation:case\\_study, application:media, compound_graph, special-purpose_layout',
      number: '9',
      pages: '1424--1437',
      publisher: 'IEEE',
      references: 'Branke2001Dynamic Collberg2003System',
      series: 'TVCG',
      title: 'Visualizing Dynamic Data with Maps',
      type: 'article',
      volume: '18',
      year: '2012',
    },
    Misue1995Layout: {
      abstract:
        "Many models in software and information engineering use graph representations; examples are data flow diagrams, state transition diagrams, flow charts, PERT charts, organization charts, Petri nets and entity-relationship diagrams. The usefulness of these graph representations depends on the quality of the layout of the graphs. Automatic graph layout, which can release humans from graph drawing, is now available in several visualization systems. Most automatic layout facilities take a purely combinatorial description of a graph and produce a layout of the graph; these methods are called 'layout creation' methods. For interactive systems, another kind of layout is needed: a facility which can adjust a layout after a change is made by the user or by the application. Although layout adjustment is essential in interactive systems, most existing layout algorithms are designed for layout creation. The use of a layout creation method for layout adjustment may totally rearrange the layout and thus destroy the user's 'mental map' of the diagram; thus a set of layout adjustment methods, separate from layout creation methods, is needed. This paper discusses some layout adjustment methods and the preservation of the 'mental map' of the diagram. First, several models are proposed to make the concept of 'mental map' more precise. Then two kinds of layout adjustments are described. One is an algorithm for rearranging a diagram to avoid overlapping nodes, and the other is a method aimed at changing the focus of interest of the user without destroying the mental map. Next, some experience with visualization systems in which the techniques have been employed is also described.",
      author: 'Misue, Kazuo and Eades, Peter and Lai, Wei and Sugiyama, Kozo',
      doi: '10.1006/jvlc.1995.1010',
      issn: '1045926X',
      journal: 'Journal of Visual Languages \\& Computing',
      keywords:
        'type:technique, paradigm:node-link, time:animation, evaluation:case\\_study, compound_graph, application:software\\_engineering, application:social, online\\_problem, mental\\_map, general-purpose_layout',
      number: '2',
      pages: '183--210',
      title: 'Layout Adjustment and the Mental Map',
      type: 'article',
      volume: '6',
      year: '1995',
    },
    Moody2005Dynamic: {
      abstract:
        "Increased interest in longitudinal social networks and the recognition that visualization fosters theoretical insight create a need for dynamic network visualizations, or network ``movies.'' This article confronts theoretical questions surrounding the temporal representations of social networks and technical questions about how best to link network change to changes in the graphical representation. The authors divide network movies into (1) static flip books, where node position remains constant but edges cumulate over time, and (2) dynamic movies, where nodes move as a function of changes in relations. Flip books are particularly useful in contexts where relations are sparse. For more connected networks, movies are often more appropriate. Three empirical examples demonstrate the advantages of different movie styles. A new software program for creating network movies is discussed in the appendix.",
      author: 'Moody, James and McFarland, Daniel A and Bender-deMoll, Skye',
      doi: '10.1086/421509',
      journal: 'American Journal of Sociology',
      keywords:
        'time:animation, paradigm:node-link, application:social, type:application, evaluation:case_study',
      number: '4',
      pages: '1206--1241',
      title: 'Dynamic Network Visualisation',
      type: 'article',
      volume: '110',
      year: '2005',
    },
    Nesbitt2002Applying: {
      abstract:
        "Graphs are a commonly used data structure for representing relational information. Drawings of these structures, as node and link diagrams, can provide a useful visualization of the underlying abstract data. This makes drawings of graphs a useful tool in information visualization. Indeed graph drawing has been applied in many application areas including software engineering, knowledge management and for depicting communication networks. The spatial layout can help the user build up a cognitive model or 'mental map' of the information structure. Many automatic algorithms for producing drawings of a graph have been implemented. In many domains it is also common for the underlying information to be dynamic and this means the graph drawing must be updated. Unfortunately, even small changes to the underlying data can result in dramatic changes to the final drawing and this means the user may totally lose their previous 'mental map'. Animation between the two versions of the layout is one approach that can assist the user to make the transition between the two drawings. We have been examining how to apply the Gestalt principles of organisation to this animation phase. The aim is to assist the user in understanding the structural and visual changes that have occurred in the layout. Results of that work are described with relevant examples.",
      author: 'Nesbitt, Keith V and Friedrich, Carsten',
      booktitle:
        'Proceedings of the 6th International Conference on Information Visualisation',
      doi: '10.1109/IV.2002.1028859',
      keywords:
        'gestalt_laws, mental_map, type:technique, paradigm:node-link, time:animation, evaluation:case_study, application:generic, compound_graph, general-purpose_layout, transition_problem',
      pages: '737--743',
      publisher: 'IEEE',
      references: 'Misue1995Layout',
      series: 'IV',
      title:
        'Applying Gestalt Principles to Animated Visualizations of Network Data',
      type: 'inproceedings',
      year: '2002',
    },
    North1996Incremental: {
      abstract:
        'Graph drawings are a basic component of user interfaces that display relationships between objects. Generating incrementally stable layouts is important for many applications. This paper describes DynaDAG, a new heuristic for incremental layout of directed acyclic graphs drawn as hierarchies, and its application in the DynaGraph system.',
      author: 'North, Stephen C',
      booktitle: 'Graph Drawing',
      doi: '10.1007/BFb0021824',
      keywords:
        'paradigm:node-link, type:technique, acyclic_graph, mental_map, time:animation, application:generic, evaluation:none, online_problem, special-purpose_layout',
      organization: 'Springer',
      pages: '409--418',
      series: 'GD',
      title: 'Incremental layout in {DynaDAG}',
      type: 'inproceedings',
      year: '1996',
    },
    Oelke2013Fingerprint: {
      abstract:
        'In prose literature often complex dynamics of interpersonal relationships can be observed between the different characters. Traditionally, node-link diagrams are used to depict the social network of a novel. However, static graphs can only visualize the overall social network structure but not the development of the networks over the course of the story, while dynamic graphs have the serious problem that there are many sudden changes between different portions of the overall social network. In this paper we explore means to show the relationships between the characters of a plot and at the same time their development over the course of a novel. Based on a careful exploration of the design space, we suggest a new visualization technique called Fingerprint Matrices. A case study exemplifies the usage of Fingerprint Matrices and shows that they are an effective means to analyze prose literature with respect to the development of relationships between the different characters.',
      author: 'Oelke, Daniela  and Kokkinakis, Dimitrios  and Keim, Daniel A',
      doi: '10.1111/cgf.12124',
      journal: 'Computer Graphics Forum',
      keywords:
        'type:application, paradigm:matrix, time:timeline, evaluation:case\\_study, application:social',
      number: '3pt4',
      pages: '371--380',
      references:
        'Brandes2011Asymmetric Burch2011Parallel Farrugia2011Effective Moody2005Dynamic Stein2010PixelOriented Yi2010TimeMatrix',
      series: 'CGF',
      title:
        '{Fingerprint Matrices}: Uncovering the dynamics of social networks in prose literature',
      type: 'article',
      volume: '32',
      year: '2013',
    },
    Ogawa2008StarGate: {
      abstract:
        'With the success of open source software projects, such as Apache and Mozilla, comes the opportunity to study the development process. In this paper, we present StarGate: a novel system for visualizing software projects. Whereas previous software project visualizations concentrated mainly on the source code changes, we literally place the developers in the center of our design. Developers are grouped visually into clusters corresponding to the areas of the file repository they work on the most. Connections are drawn between people who communicate via email. The changes to the repository are also displayed. With StarGate, it is easy to look beyond the source code and see trends in developer activity. The system can be used by anyone interested in the project, but it especially benefits project managers, project novices and software engineering researchers.',
      author: 'Ogawa, Michael and Ma, Kwan-Liu',
      booktitle: 'Proceedings of the IEEE Pacific Visualization Symposium',
      doi: '10.1109/PACIFICVIS.2008.4475476',
      keywords:
        'type:application, time:animation, paradigm:node-link, application:software_engineering, software_evolution, radial, evaluation:case_study',
      pages: '191--198',
      publisher: 'IEEE',
      references:
        'Brandes2003Visual Chen2003Visualizing Collberg2003System Saraiya2005Visualization',
      series: 'PacificVis',
      title:
        '{StarGate}: A unified, interactive visualization of software projects',
      type: 'inproceedings',
      year: '2008',
    },
    Ogawa2009codeswarm: {
      abstract:
        'In May of 2008, we published online a series of software visualization videos using a method called code_swarm. Shortly thereafter, we made the code open source and its popularity took off. This paper is a study of our code swarm application, comprising its design, results and public response. We share our design methodology, including why we chose the organic information visualization technique, how we designed for both developers and a casual audience, and what lessons we learned from our experiment. We validate the results produced by code_swarm through a qualitative analysis and by gathering online user comments. Furthermore, we successfully released the code as open source, and the software community used it to visualize their own projects and shared their results as well. In the end, we believe code_swarm has positive implications for the future of organic information design and open source information visualization practice.',
      author: 'Ogawa, Michael and Ma, Kwan-Liu',
      doi: '10.1109/TVCG.2009.123',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:application, paradigm:node-link, omitted_links, time:animation, time:timeline, evaluation:user_study, application:software_engineering, software_evolution',
      number: '6',
      pages: '1097--1104',
      publisher: 'IEEE',
      references: 'Collberg2003System Ogawa2008StarGate',
      series: 'TVCG',
      title: 'code\\_swarm: A design study in organic software visualization',
      type: 'article',
      volume: '15',
      year: '2009',
    },
    Perer2012MatrixFlow: {
      abstract:
        'To develop a visual analytic system to help medical professionals improve disease diagnosis by providing insights for understanding disease progression. We develop MatrixFlow, a visual analytic system that takes clinical event sequences of patients as input, constructs time-evolving networks and visualizes them as a temporal flow of matrices. MatrixFlow provides several interactive features for analysis: 1) one can sort the events based on the similarity in order to accentuate underlying cluster patterns among those events; 2) one can compare co-occurrence events over time and across cohorts through additional line graph visualization. MatrixFlow is applied to visualize heart failure (HF) symptom events extracted from a large cohort of HF cases and controls (n',
      author: 'Perer, Adam and Sun, Jimeng',
      booktitle: 'AMIA Annual Symposium Proceedings',
      keywords:
        'type:application, time:timeline, paradigm:matrix, evaluation:case_study, application:biology',
      pages: '716',
      publisher: 'American Medical Informatics Association',
      references: 'Moody2005Dynamic Yi2010TimeMatrix',
      series: 'AMIA',
      title:
        '{MatrixFlow}: Temporal network visual analytics to track symptom evolution during disease progression',
      type: 'inproceedings',
      volume: '2012',
      year: '2012',
    },
    Pohl2008Interactive: {
      abstract:
        "A variety of applications especially in the area of Web 2.0 produce frequently altering hierarchical networks. Thus application operators, members of community websites but also media scientists often are interested in gaining deeper insights in the complex structures of their project and its development over time. In order to enable a suitable visualization of such networks it is not only required to implement an intelligent data management but also a suitable network drawing engine that cares for the user's needs --- especially for visualization of network dynamics. This paper presents the  Xldn  visualization tool that enables visual exploration of evolving hierarchical networks. It includes a layout generation algorithm that allows for the preservation of the mental map --- a crucial property when visualizing dynamic networks. By utilization of an efficient data management and a parallel implementation of the graph drawing algorithm  Xldn  provides a reasonably fast and interactive network visualization. This way  Xldn  facilitates an in-depth evolution analysis of large hierarchic networks.",
      author: 'Pohl, Mathias and Birke, Peter',
      booktitle:
        'Proceedings of the 10th International Conference on Visual Information Systems',
      doi: '10.1007/978-3-540-85891-1\\_8',
      isbn: '978-3-540-85890-4',
      journal:
        'Visual Information Systems. Web-Based Visual Information Search and Management',
      keywords:
        'type:technique, paradigm:node-link, compound_graph, mental\\_map, time:animation, evaluation:none, application:social, special-purpose_layout',
      pages: '56--67',
      publisher: 'Springer-Verlag',
      references: 'Diehl2001Preserving',
      series: 'VISUAL',
      title: 'Interactive Exploration of Large Dynamic Networks',
      type: 'inproceedings',
      year: '2008',
    },
    Pupyrev2010Analyzing: {
      abstract:
        'In this paper, we consider the problem of analysis and visualization of online conversations (chat histories, email archives, etc.). We present a dynamic graph drawing algorithm based on modification of multidimensional scaling. The algorithm builds a layout of sequence of graphs and produces a slice view of the evolution of online communications. The method have been applied for visualization of two real-world datasets. We show how to use these visualizations for analyzing and extracting hidden temporal patterns from online conversation data.',
      author: 'Pupyrev, Sergey and Tikhonov, Alexey',
      booktitle:
        'Proceedings of the 10th International Conference on Intelligent Systems Design and Applications',
      doi: '10.1109/ISDA.2010.5687175',
      keywords:
        'type:application, paradigm:node-link, time:timeline, evaluation:case\\_study, application:social, social_media',
      organization: 'IEEE',
      pages: '748--753',
      references: 'Brandes2003Visual Dwyer2004Visualising Misue1995Layout',
      series: 'ISDA',
      title: 'Analyzing Conversations with Dynamic Graph Visualization',
      type: 'inproceedings',
      year: '2010',
    },
    Purchase2007Important: {
      abstract:
        'While some research has been performed on the human understanding of static graph layout algorithms, dynamic graph layout algorithms have only recently been developed sufficiently to enable similar investigations. This paper presents the first empirical analysis of a dynamic graph layout algorithm, focusing on the assumption that maintaining the  \u201d mental map\u201d between time-slices assists with the comprehension of the evolving graph. The results confirm this assumption with respect to some categories of tasks.',
      author: 'Purchase, Helen C and Hoggan, Eve and G\\"org, Carsten',
      booktitle: 'Graph Drawing',
      doi: '10.1007/978-3-540-70904-6_19',
      isbn: '978-3-540-70903-9',
      keywords:
        'mental\\_map, type:evaluation, paradigm:node-link, time:animation, evaluation:user_study, application:generic',
      pages: '184--195',
      publisher: 'Springer',
      series: 'GD',
      title:
        "How Important Is the ``Mental Map''? -- An Empirical Investigation of a Dynamic Graph Layout Algorithm Graph Drawing",
      type: 'incollection',
      year: '2007',
    },
    Purchase2008Extremes: {
      abstract:
        'Research on effective algorithms for efficient graph layout continues apace, and faster technology has led to increasing research on algorithms for the depiction of dynamic graphs which represent changing relational information over time. Like the static layout algorithms that preceded these, empirical work lags behind their design, and assumptions are made about how users\u2019 comprehension may be enhanced without human data to support them. This paper presents an experiment investigating an existing dynamic layout algorithm, focusing on the effect of the preservation of the mental map on comprehension. The results indicate that extremes produce better performance, suggesting that individual preference may be important.',
      author: 'Purchase, Helen C and Samra, Amanjit',
      booktitle: 'Diagrammatic Representation and Inference',
      doi: '10.1007/978-3-540-87730-1_9',
      keywords:
        'mental\\_map, paradigm:node-link, type:evaluation, mental\\_map, evaluation:user\\_study, time:animation, application:social',
      pages: '60--73',
      publisher: 'Springer',
      references:
        'Brandes2003Visual Collberg2003System Lee2006Mental Saffrey2008Mental',
      series: 'Diagrams',
      title:
        'Extremes are better: Investigating mental map preservation in dynamic graphs',
      type: 'incollection',
      year: '2008',
    },
    Reitz2009Focused: {
      abstract:
        'Many applications feature large hierarchic dynamic graphs that change over time. Often, these changes are more important than the graphs themselves.In our approach, areas of interests in dynamic graphs are detected based on user preferences. The user is guided from one area of interest to another in such a way that reduced contextual information is shown. To this end, dynamic graph layout mechanisms are extended by a reprocessing that decides what to show and a post processing that stages the animation based on spatial information.',
      author: 'Reitz, Florian and Pohl, Mathias and Diehl, Stephan',
      booktitle:
        'Proceedings of the 13th International Conference on Information Visualisation',
      doi: '10.1109/iv.2009.24',
      isbn: '978-0-7695-3733-7',
      keywords:
        'paradigm:node-link, time:animation, compound_graph, evaluation:case\\_study, application:software\\_engineering, type:technique, special-purpose_layout',
      pages: '679--684',
      publisher: 'IEEE',
      references: 'Misue1995Layout Pohl2008Interactive',
      series: 'IV',
      title: 'Focused Animation of Dynamic Compound Digraphs',
      type: 'inproceedings',
      year: '2009',
    },
    Reitz2010Framework: {
      abstract:
        'Understanding constellations in large data collections has become a common task. One obstacle a user has to overcome is the internal complexity of these repositories. For example, extracting connected data from a normalized relational database requires knowledge of the table structure which might not be available for the casual user. In this paper we present a visualization framework which presents the collection as a set of entities and relations (on the data level). Using rating functions, we divide large relation networks into small graphs which resemble ego-centered networks. These graphs are connected so the user can browse from one to another. To further assist the user, we present two views which embed information on the evolution of the relations into the graphs. Each view emphasizes another aspect of temporal development. The framework can be adapted to any repository by a flexible data interface and a graph configuration file. We present some first web-based applications including a visualization of the DBLP data set. We use the DBLP visualization to evaluate our approach.',
      author: 'Reitz, Florian',
      journal: 'arXiv preprint arXiv:1009.5183',
      keywords:
        'type:technique, paradigm:node-link, time:timeline, ego\\_network, evaluation:case\\_study, evaluation:user\\_study, application:document, integrated_node-link, radial',
      references: 'Burch2008TimeRadarTrees',
      series: 'CoRR',
      title:
        'A Framework for an Ego-Centered and Time-Aware Visualization of Relations in Arbitrary Data Repositories',
      type: 'article',
      url: 'http://arxiv.org/abs/1009.5183',
      year: '2010',
    },
    Rey2010Controlling: {
      abstract:
        'The experiment investigated whether controlling presentation speed as well as labels, which display the names of the currently presented nodes in interactive dynamic graphs, affects comprehension performance. Dynamic graphs are animated graphical representations of nodes and edges representing mathematical structures used to model relations between different objects over time. After being tested on spatial imagination and linguistic thinking, 111 students had to answer twelve multiple choice comprehension questions about six interactive dynamic graphs while working with them. For each question, participants were randomly assigned to one cell of a 2 (with or without a scrollbar to adjust the presentation speed of the visualization) \u00d7 2 (with labels displaying all names of the currently presented nodes in the dynamic graphs or with tooltips displaying only one node name if the mouse cursor hovers over this node) factorial design. Scrollbars, which allow adjusting the presentation speed, were rarely used and did not foster learners\u2019 comprehension performance. Labels displaying all names of the currently presented nodes fostered learners\u2019 comprehension performance compared to tooltips. The higher the ability for linguistic thinking of the participants, the more their comprehension performance benefited from labels. These results are consistent with the cognitive-affective theory of learning with media.',
      author: 'Rey, G\\"unter D and Diehl, Stephan',
      doi: '10.1027/1864-1105/a000021',
      journal:
        'Journal of Media Psychology: Theories, Methods, and Applications',
      keywords:
        'type:evaluation, time:animation, paradigm:node-link, evaluation:user\\_study, application:generic',
      number: '4',
      pages: '160--170',
      publisher: 'Hogrefe Publishing',
      title:
        'Controlling presentation speed, labels, and tooltips in interactive dynamic graphs',
      type: 'article',
      volume: '22',
      year: '2010',
    },
    Rohrschneider2010Visual: {
      abstract:
        'We extend our previous work on the exploration of static metabolic networks to evolving, and therefore dynamic, pathways. We apply our visualization software to data from a simulation of early metabolism. Thereby, we show that our technique allows us to test and argue for or against different scenarios for the evolution of metabolic pathways. This supports a profound and efficient analysis of the structure and properties of the generated metabolic networks and its underlying components, while giving the user a vivid impression of the dynamics of the system. The analysis process is inspired by Ben Shneiderman\u2019s mantra of information visualization. For the overview, user-defined diagrams give insight into topological changes of the graph as well as changes in the attribute set associated with the participating enzymes, substances and reactions. This way, \u201cinteresting features\u201d in time as well as in space can be recognized. A linked view implementation enables the navigation into more detailed layers of perspective for in-depth analysis of individual network configurations.',
      author:
        'Rohrschneider, Markus and Ullrich, Alexander and Kerren, Andreas and Stadler, Peter F and Scheuermann, Gerik',
      booktitle: 'Advances in Visual Computing',
      doi: '10.1007/978-3-642-17289-2_31',
      keywords:
        'paradigm:node-link, time:timeline, time:animation, type:application, application:biology, evaluation:case_study',
      pages: '316--327',
      publisher: 'Springer',
      references:
        'Misue1995Layout Diehl2001Preserving Frishman2008Online Moody2005Dynamic',
      series: 'ISVC',
      title: 'Visual network analysis of dynamic metabolic pathways',
      type: 'incollection',
      year: '2010',
    },
    Rufiange2013DiffAni: {
      abstract:
        'Visualization of dynamically changing networks (graphs) is a significant challenge for researchers. Previous work has experimentally compared animation, small multiples, and other techniques, and found trade-offs between these. One potential way to avoid such trade-offs is to combine previous techniques in a hybrid visualization. We present two taxonomies of visualizations of dynamic graphs: one of non-hybrid techniques, and one of hybrid techniques. We also describe a prototype, called DiffAni, that allows a graph to be visualized as a sequence of three kinds of tiles: diff tiles that show difference maps over some time interval, animation tiles that show the evolution of the graph over some time interval, and small multiple tiles that show the graph state at an individual time slice. This sequence of tiles is ordered by time and covers all time slices in the data. An experimental evaluation of DiffAni shows that our hybrid approach has advantages over non-hybrid techniques in certain cases.',
      author: "Rufiange, S{\\'e}bastien and McGuffin, Michael J",
      doi: '10.1109/TVCG.2013.149',
      issn: '1077-2626',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'type:technique, paradigm:node-link, evaluation:user\\_study, application:generic, graph\\_difference, taxonomy, time:timeline, time:animation, time_aggregation, animated_timeline',
      number: '12',
      pages: '2556-2565',
      references:
        'Archambault2011Animation Brandes2003Visual Brandes2011Asymmetric Burch2008TimeRadarTrees Burch2010TimeSpiderTrees Burch2011Parallel Farrugia2011Effective Federico2011Visual Greilich2009Visualizing Hadlak2011Situ Purchase2008Extremes Saraiya2005Visualization Windhager2011Visual Yi2010TimeMatrix Zaman2011Effect',
      series: 'TVCG',
      title:
        '{DiffAni}: Visualizing Dynamic Graphs with a Hybrid of Difference Maps and Animation',
      type: 'article',
      volume: '19',
      year: '2013',
    },
    Rufiange2014AniMatrix: {
      abstract:
        'Software designs are ever changing to adapt to new environments and requirements. Tracking and understanding changes in modules and relationships in a software project is difficult, but even more so when the software goes through several types of changes. The typical complexity and size of software also makes it harder to grasp software evolution patterns. In this paper, we present an interactive matrix-based visualization technique that, combined with animation, depicts how software designs evolve. For example, it shows which new modules and couplings are added and removed over time. Our generic visualization supports dynamic and weighted digraphs and is applied in the context of software evolution. Analyzing source code changes is important to determine the software\u2019s structural organization and identify quality issues over time. To demonstrate our approach, we explore open-source repositories and discuss some of our findings regarding these evolving software designs.',
      author: "Rufiange, S{\\'e}bastien and Melan{\\c{c}}on, Guy",
      booktitle:
        'Proceedings of the 2nd IEEE Working Conference on Software Visualization',
      keywords:
        'type:technique, time:animation, paradigm:matrix, application:software_engineering, evaluation:case_study, taxonomy, transition_problem, weighted_graph, multivariate_graph, directed_graph',
      pages: '137--146',
      references:
        'Erten2004GraphAEL Yi2010TimeMatrix Archambault2011Difference Archambault2011Animation Purchase2008Extremes Zaman2011Effect Rufiange2013DiffAni Collberg2003System Hindle2007YARN Rufiange2014Visualizing Beck2014State Burch2012Radial Bach2014GraphDiaries',
      series: 'VISSOFT',
      title: '{AniMatrix}: A Matrix-Based Visualization of Software Evolution',
      type: 'inproceedings',
      url: 'http://conferences.computer.org/vissoft/2014/papers/6150a137.pdf',
      year: '2014',
    },
    Rufiange2014Visualizing: {
      abstract:
        'Identifying and tracking evolving software structures at a design level is a challenging task. Although there are ways to visualize this information statically, there is a need for methods that help analyzing the evolution of software design elements. In this paper, we present a new visual approach to identify variability zones in software designs and explore how they evolve over time. To verify the usefulness of our approach, we did a user study in which participants had to browse software histories and find visual patterns. Most participants were able to find interesting observations and found our approach intuitive and useful. We present a number of design aspects that were observed by participants and the authors using our IHVis tool on four open-source projects.',
      author: "Rufiange, S{\\'e}bastien and Fuhrman, Christopher P",
      doi: '10.1016/j.jss.2013.10.044',
      journal: 'Journal of Systems and Software',
      keywords:
        'type:application, paradigm:node-link, evaluation:user_study, software_evolution, application:software_engineering, graph_difference, time:timeline, time:animation, juxtaposed_node-link',
      number: '0',
      pages: '231--249',
      publisher: 'Elsevier',
      references:
        'Archambault2011Animation Farrugia2011Effective Hindle2007YARN Zaman2011Effect',
      series: 'JSS',
      title: 'Visualizing protected variations in evolving software designs',
      type: 'article',
      volume: '88',
      year: '2014',
    },
    Saffrey2008Mental: {
      abstract:
        'The design of automatic layout algorithms for single graphs is a well established field, and some recent studies show how these algorithms affect human understanding. By contrast, layout algorithms for graphs that change over time are relatively immature, and few studies exist to evaluate their effectiveness empirically. This paper presents two new dynamic graph layout algorithms and empirical investigations of how effective these algorithms are with respect to human understanding. Central to each algorithm is the "mental map": the degree to which the layout supports continuous understanding. This work aims to evaluate the importance of the mental map, alongside traditional static graph aesthetics, in answering questions about dynamic graphs. We discover that a simple concept of the mental map is not sufficient for increasing understanding of the graph.',
      author: 'Saffrey, Peter and Purchase, Helen C',
      booktitle:
        'Proceedings of the 9th Conference on Australasian User Interface',
      keywords:
        'time:animation, mental\\_map, paradigm:node-link, evaluation:user\\_study, type:evaluation, application:generic',
      pages: '85--93',
      publisher: 'Australian Computer Society, Inc.',
      references: 'Lee2006Mental Misue1995Layout Purchase2007Important',
      series: 'AUIC',
      title:
        "The ``mental map'' versus ``static aesthetic'' compromise in dynamic graphs: a user study",
      type: 'inproceedings',
      year: '2008',
    },
    Sallaberry2012Clustering: {
      abstract:
        'In this paper, we present a new approach to exploring dynamic graphs. We have developed a new clustering algorithm for dynamic graphs which finds an ideal clustering for each time-step and links the clusters together. The resulting time-varying clusters are then used to define two visual representations. The first view is an overview that shows how clusters evolve over time and provides an interface to find and select interesting time-steps. The second view consists of a node link diagram of a selected time-step which uses the clustering to efficiently define the layout. By using the time-dependant clustering, we ensure the stability of our visualization and preserve user mental map by minimizing node motion, while simultaneously producing an ideal layout for each time step. Also, as the clustering is computed ahead of time, the second view updates in linear time which allows for interactivity even for graphs with upwards of tens of thousands of nodes.',
      author: 'Sallaberry, Arnaud and Muelder, Chris and Ma, Kwan-Liu',
      booktitle: 'Graph Drawing',
      doi: '10.1007/978-3-642-36763-2_43',
      keywords:
        'paradigm:node-link, type:technique, clustering, application:infrastructure, evaluation:case\\_study, time:timeline, time:animation, linear\\_arrangement, mental\\_map, compound_graph',
      pages: '487-498',
      publisher: 'Springer',
      references:
        'Frishman2008Online Archambault2011Animation Kumar2006Visual Hu2012Embedding Saffrey2008Mental Burch2011Parallel',
      series: 'GD',
      'survey:data': '(n:41928, e:218080, t:421)',
      title: 'Clustering, Visualizing, and Navigating for Large Dynamic Graphs',
      type: 'inproceedings',
      year: '2012',
    },
    Saraiya2005Visualization: {
      abstract:
        "The most common approach to support analysis of graphs with associated time series data include: overlay of data on graph vertices for one timepoint at a time by manipulating a visual property (e.g. color) of the vertex, along with sliders or some such mechanism to animate the graph for other timepoints. Alternatively, data from all the timepoints can be overlaid simultaneously by embedding small charts into graph vertices. These graph visualizations may also be linked to other visualizations (e.g., parallel co-ordinates) using brushing and linking. This paper describes a study performed to evaluate and rank graph+timeseries visualization options based on users' performance time and accuracy of responses on predefined tasks. The results suggest that overlaying data on graph vertices one timepoint at a time may lead to more accurate performance for tasks involving analysis of a graph at a single timepoint, and comparisons between graph vertices for two distinct timepoints. Overlaying data simultaneously for all the timepoints on graph vertices may lead to more accurate and faster performance for tasks involving searching for outlier vertices displaying different behavior than the rest of the graph vertices for all timepoints. Single views have advantage over multiple views on tasks that require topological information. Also, the number of attributes displayed on nodes has a non trivial influence on accuracy of responses, whereas the number of visualizations affect the performance time.",
      author: 'Saraiya, Purvi and Lee, Peter and North, Chris',
      booktitle:
        'Proceedings of the 2005 IEEE Symposium on Information Visualization',
      doi: '10.1109/INFVIS.2005.1532151',
      isbn: '0-7803-9464-x',
      keywords:
        'paradigm:node-link, type:evaluation, time:timeline, application:biology, evaluation:user\\_study',
      pages: '225-232',
      publisher: 'IEEE Computer Society',
      series: 'InfoVis',
      title: 'Visualization of Graphs with Associated Timeseries Data',
      type: 'inproceedings',
      year: '2005',
    },
    Schmauder2015Visualizing: {
      abstract:
        'Graphs are traditionally represented as node-link diagrams, but these typically suffer from visual clutter when they become denser, i.e. more vertices and edges are present in the data set. Partial link drawings have been introduced for node-link diagrams aiming at reducing visual clutter caused by link crossings. Although this concept was shown to perform well for some parameter settings, it has not been used for visually encoding dynamic weighted digraphs. In this paper we investigate the problem of visualizing time-varying graphs as one node-link diagram in a specific layout by exploiting the links as timelines. Partially drawn links are used to show the graph dynamics by splitting each link into as many segments as time steps have to be represented. Conventional 2D layout algorithms can be applied while simultaneously showing the evolution over time. Color-coded links represent the changing weights. We use tapered links to reduce possible overlaps at the link target nodes that would occur when using traditional arrow-based directed links. We experiment with different graph layouts and different numbers of data dimensions, i.e. number of vertices, edges, and time steps. We illustrate the usefulness of the technique in a case study investigating dynamic migration data.',
      author:
        'Schmauder, Hansj\\"{o}rg and Burch, Michael and Weiskopf, Daniel',
      booktitle:
        'Proceedings of the International Conference on Information Visualization Theory and Application',
      doi: '10.5220/0005303801230130',
      keywords:
        'type:technique, time:timeline, paradigm:node-link, weighted_graph, directed_graph, integrated_node-link, application:geo, evaluation:case_study, omitted_links',
      references:
        'Archambault2011Animation Beck2012Rapid Brandes2011Asymmetric Burch2010TimeSpiderTrees Burch2011Parallel Burch2014FlipBook Frishman2008Online Ghani2012Perception Stein2010PixelOriented',
      series: 'IVAPP',
      title: 'Visualizing Dynamic Weighted Digraphs with Partial Links',
      type: 'inproceedings',
      year: '2015',
    },
    Shannon2007Considerations: {
      abstract:
        'In this survey paper we discuss the considerations involved in modeling, visualising and exploring dynamic graphs\u2014those graphs which are continually changing in structure to reflect the evolution of the system they are representing. The design of algorithms to analyse and generate visualisations of dynamic graphs pose both a technical and perceptual problem. A range of additional issues beyond those encountered for static graphs are uncovered, from the need for efficient dynamic data structures and algorithms to the difficulties of keeping a visualisation understandable for the user while it is constantly changing its form.',
      author: 'Shannon, Ross and Quigley, Aaron J',
      keywords:
        'type:evaluation, paradigm:node-link, mental_map, time:animation, evaluation:survey, application:generic',
      references: 'Lee2006Mental Misue1995Layout',
      title: 'Considerations in Dynamic Graph Drawing: A Survey',
      type: 'misc',
      url: 'http://rossshannon.com/publications/softcopies/rs2007-dynamic-graphs-survey.pdf',
      year: '2007',
    },
    Shi2011Dynamic: {
      abstract:
        'The dynamic network visualization has been a challenging topic due to the complexity introduced by the extra time dimension. Existing solutions to this problem are usually good for the overview and presentation, but not for the interactive analysis. We propose in this paper a new approach which only considers the dynamic network central to a focus node (aka dynamic ego network). The navigation of the entire network is achieved by switching the focus node with user interactions. With this approach, the complexity of the compressed dynamic network is greatly reduced without sacrificing the network and time affinity central to the focus node. As a result, we are able to present each dynamic ego network in a single static view, well supporting user analysis on temporal network patterns. We describe our general framework including the network data pre-processing, 1.5D network and trend visualization design, layout algorithms, as well as several customized interactions. In addition, we show that our approach can also be extended to visualize the event-based and multimodal dynamic networks. Finally, we demonstrate, through two practical case studies, the effectiveness of our solution in support of visual evidence and pattern discovery.',
      author: 'Shi, Lei and Wang, Chen and Wen, Zhen',
      booktitle: 'Proceedings of the 2011 IEEE Pacific Visualization Symposium',
      doi: '10.1109/PACIFICVIS.2011.5742388',
      keywords:
        'paradigm:node-link, type:technique, application:social, application:document, evaluation:case\\_study, time:timeline, ego\\_network, integrated_node-link, directed_graph, force-directed_layout',
      pages: '179--186',
      publisher: 'IEEE',
      references:
        'Collberg2003System Diehl2001Preserving Friedrich2002Graph Frishman2004Dynamic Frishman2008Online Huang1998Online Misue1995Layout Moody2005Dynamic',
      series: 'PacificVis',
      title: 'Dynamic network visualization in {1.5D}',
      type: 'inproceedings',
      year: '2011',
    },
    Shi2015Egocentric: {
      abstract:
        'Dynamic network visualization has been a challenging research topic due to the visual and computational complexity introduced by the extra time dimension. Existing solutions are usually good for overview and presentation tasks, but not for the interactive analysis of a large dynamic network. We introduce in this paper a new approach which considers only the dynamic network central to a focus node, also known as the egocentric dynamic network. Our major contribution is a novel 1.5D visualization design which greatly reduces the visual complexity of the dynamic network without sacrificing the topological and temporal context central to the focus node. In our design, the egocentric dynamic network is presented in a single static view, supporting rich analysis through user interactions on both time and network. We propose a general framework for the 1.5D visualization approach, including the data processing pipeline, the visualization algorithm design, and customized interaction methods. Finally, we demonstrate the effectiveness of our approach on egocentric dynamic network analysis tasks, through case studies and a controlled user experiment comparing with three baseline dynamic network visualization methods.',
      author:
        'Shi, Lei and Wang, Chen and Wen, Zhen and Qu, Huamin and Lin, Chuang and Liao, Qi',
      comment: 'Extended version of Shi2011Dynamic',
      doi: '10.1109/TVCG.2014.2383380',
      issuse: '5',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'paradigm:node-link, type:technique, application:social, application:document, evaluation:case\\_study, time:timeline, ego\\_network, integrated_node-link, directed_graph, force-directed_layout, evaluation:user_study',
      pages: '624--637',
      publisher: 'IEEE',
      references:
        'Hadlak2011Situ Archambault2011Animation Farrugia2011Effective Shi2011Dynamic Cohen1995Dynamic Misue1995Layout Frishman2008Online Frishman2004Dynamic Diehl2001Preserving Yi2010TimeMatrix Burch2008TimeRadarTrees Burch2011Parallel Farrugia2011Exploring Ghani2012Perception Federico2011Visual',
      series: 'TVCG',
      title: '{1.5D} Egocentric Dynamic Network Visualization',
      type: 'article',
      volume: '21',
      year: '2015',
    },
    Smuc2014Connect: {
      abstract:
        'In recent years, the analysis of dynamic network data has become an increasingly prominent research issue. While several visual analytics techniques with the focus on the examination of temporal evolving networks have been proposed in recent years, their effectiveness and utility for end users need to be further analyzed. When dealing with techniques for dynamic network analysis, which integrate visual, computational, and interactive components, users become easily overwhelmed by the amount of information displayed\u2014even in case of small sized networks. Therefore we evaluated visual analytics techniques for dynamic networks during their development, performing intermediate evaluations by means of mock-up and eye-tracking studies and a final evaluation of the running interactive prototype, traceing three pathways of development in detail: The first one focused on the maintenance of the user\u2019s mental map throughout changes of network structure over time, changes caused by user interactions, and changes of analytical perspectives. The second one addresses the avoidance of visual clutter, or at least its moderation. The third pathway of development follows the implications of unexpected user behaviour and multiple problem solving processes. Aside from presenting solutions based on the outcomes of our evaluation, we discuss open and upcoming problems and set out new research questions.',
      author:
        'Smuc, Michael and Federico, Paolo and Windhager, Florian and Aigner, Wolfgang and Zenk, Lukas and Miksch, Silvia',
      booktitle: 'Handbook of Human Centric Visualization',
      doi: '10.1007/978-1-4614-7485-2_25',
      keywords:
        'type:evaluation, evaluation:user_study, mental_map, application:social, paradigm:node-link, time:timeline, juxtaposed_node-link, superimposed_node-link, 3d, evaluation:expert',
      pages: '623--650',
      publisher: 'Springer',
      references:
        'Brandes2003Visual Brandes2012Visualization Dwyer2004Visualising Federico2011Visual Misue1995Layout Moody2005Dynamic Windhager2011Visual',
      title:
        'How do you connect moving dots? Insights from user studies on dynamic network visualizations',
      type: 'incollection',
      year: '2014',
    },
    Stab2010SemaTime: {
      abstract:
        'Timeline based visualizations arrange time-dependent entities along a time-axis and are used in many different domains like digital libraries, criminal investigation and medical information systems to support users in understanding chronological structures. By the use of semantic technologies, the information is categorized in a domain-specific, hierarchical schema and specified by semantic relations. Commonly semantic relations in timeline visualizations are depicted by interconnecting entities with a directed edge. However it is possible that semantic relations change in the course of time. In this paper we introduce a new timeline visualization for time-dependent semantics called SemaTime that offers a hierarchical categorization of time-dependent entities including navigation and filtering features. We also present a novel concept for visualizing time-dependent relations that allows the illustration of time-varying semantic relations and affords an easy understandable visualization of complex, time-dependent interrelations.',
      author: 'Stab, Christian and Nazemi, Kawa and Fellner, Dieter W',
      booktitle: 'Advances in Visual Computing',
      doi: '10.1007/978-3-642-17277-9_53',
      isbn: '978-3-642-17276-2',
      keywords:
        'type:application, time:timeline, paradigm:node-link, evaluation:case\\_study, application:document',
      pages: '514--523',
      publisher: 'Springer',
      series: 'ISVC',
      title:
        '{SemaTime} -- Timeline Visualization of Time-Dependent Relations and Semantics',
      type: 'incollection',
      year: '2010',
    },
    Stein2010PixelOriented: {
      abstract:
        'We propose a new approach to visualize social networks. Most common network visualizations rely on graph drawing. While without doubt useful, graphs suffer from limitations like cluttering and important patterns may not be realized especially when networks change over time. Our approach adapts pixel-oriented visualization techniques to social networks as an addition to traditional graph visualizations. The visualization is exemplified using social networks based on corporate wikis.',
      author: "Stein, Klaus and Wegener, Ren\\'e and Schlieder, Christoph",
      booktitle:
        'Proceedings of the 2010 International Conference on Advances in Social Networks Analysis and Mining',
      doi: '10.1109/asonam.2010.18',
      isbn: '978-0-7695-4138-9',
      keywords:
        'type:technique, paradigm:matrix, time:timeline, evaluation:case\\_study, application:social, intra-cell_timelines',
      pages: '233--240',
      publisher: 'IEEE',
      references: 'Moody2005Dynamic Bender-deMoll2006Science',
      series: 'ASONAM',
      title: 'Pixel-Oriented Visualization of Change in Social Networks',
      type: 'inproceedings',
      year: '2010',
    },
    Toyoda2005System: {
      abstract:
        'We propose WebRelievo, a system for visualizing and analyzing the evolution of the web structure based on a large Web archive with a series of snapshots. It visualizes the evolution with a time series of graphs, in which nodes are web pages, and edges are relationships between pages. Graphs can be clustered to show the overview of changes in graphs. WebRelievo aligns these graphs according to their time, and automatically determines their layout keeping positions of nodes synchronized over time, so that the user can keep track pages and clusters. This visualization enables us to understand when pages appeared, how their relationships have evolved, and how clusters are merged and split over time. Current implementation of WebRelievo is based on six Japanese web archives crawled from 1999 to 2003. The user can interactively browse those graphs by changing the focused page and by changing layouts of graphs. Using WebRelievo we can answer historical questions, and to investigate changes in trends on the Web. We show the feasibility of WebRelievo by applying it to tracking trends in P2P systems and search engines for mobile phones, and to investigating link spamming.',
      author: 'Toyoda, Masashi and Kitsuregawa, Masaru',
      booktitle:
        'Proceedings of the 16th ACM Conference on Hypertext and Hypermedia',
      doi: '10.1145/1083356.1083387',
      keywords:
        'type:application, paradigm:node-link, time:timeline, application:document, clustering, evaluation:case_study',
      pages: '151--160',
      publisher: 'ACM',
      references:
        'Chen2003Visualizing Collberg2003System Diehl2001Preserving Erten2004Exploring',
      series: 'HYPERTEXT',
      title:
        'A system for visualizing and analyzing the evolution of the web with a time series of graphs',
      type: 'inproceedings',
      year: '2005',
    },
    Trier2006Towards: {
      abstract:
        'Communities of Practice regularly utilize virtual means of communication. The according software support provides its members with many sophisticated features for generating content and for communicating with each other via the internet or intranet. However, functionalities to monitor, assess, coordinate, and communicate the quality and development of the underlying electronicnetworks of experts are frequently missing. To meet this need of increased manageability, this contribution introduces a Social Network Intelligence software approach which aims at supporting the comprehension of the structure and value of electronic communities by automatically extracting and mining available electronic data of various types of virtual communication networks, like e-mail archives, discussion groups, or instant messaging communication. Experimental structural visualizations employing Social Network Analysis methods are combined with Keyword Extraction to move towards a Social Network Intelligence approach which generates transparency of complex virtual communication networks. Together with a comprehensive visualization method, an approach for software-supported communication network measurement and evaluation is suggested. It supports the identification of important participants, topics, or clusters in the network, evaluates the interpersonal communication structure and visually traces the evolvement of the knowledge exchange over time.',
      author: 'Trier, Matthias',
      booktitle: 'Virtuelle Organisationen und Neue Medien',
      keywords:
        'time:animation, type:application, paradigm:node-link, evaluation:case_study, application:social',
      pages: '331--342',
      publisher: 'TUDPress',
      title:
        'Towards a social network intelligence tool for visual analysis of virtual communication networks',
      type: 'inproceedings',
      year: '2006',
    },
    Vehlow2013Radial: {
      abstract:
        'We propose a novel radial layered matrix visualization for dynamic directed weighted graphs in which the vertices can also be hierarchically organized. Edges are represented as color-coded arcs within the radial diagram. Their positions are defined by polar coordinates instead of Cartesian coordinates as in traditional adjacency matrix representations: the angular position of an edge within an annulus is given by the angle bisector of the two related vertices, the radial position depends linearly on the angular distance between these vertices. The exploration of time-varying relational data is facilitated by aligning graph patterns radially. Furthermore, our approach incorporates several interaction techniques to explore dynamic patterns such as trends and countertrends. The usefulness is illustrated by two case studies analyzing large dynamic call graphs acquired from open source software projects.',
      author:
        'Vehlow, Corinna and Burch, Michael and Schmauder, Hansj\\"org and Weiskopf, Daniel',
      booktitle:
        'Proceedings of the 17th International Conference Information Visualisation',
      doi: '10.1109/IV.2013.6',
      keywords:
        'time:timeline, paradigm:matrix, compound_graph, evaluation:case_study, application:software_engineering, radial, type:technique, layered_matrices',
      pages: '51-58',
      publisher: 'IEEE',
      references:
        'Archambault2011Animation Frishman2008Online Misue1995Layout Burch2011Parallel Beck2012Rapid Burch2012Radial Brandes2011Asymmetric Yi2010TimeMatrix',
      series: 'IV',
      title: 'Radial Layered Matrix Visualization of Dynamic Graphs',
      type: 'inproceedings',
      year: '2013',
    },
    Vehlow2013iVUN: {
      abstract:
        'Background Mathematical models are nowadays widely used to describe biochemical reaction networks. One of the main reasons for this is that models facilitate the integration of a multitude of different data and data types using parameter estimation. Thereby, models allow for a holistic understanding of biological processes. However, due to measurement noise and the limited amount of data, uncertainties in the model parameters should be considered when conclusions are drawn from estimated model attributes, such as reaction fluxes or transient dynamics of biological species. We developed the visual analytics system iVUN that supports uncertainty-aware analysis of static and dynamic attributes of biochemical reaction networks modeled by ordinary differential equations. The multivariate graph of the network is visualized as a node-link diagram, and statistics of the attributes are mapped to the color of nodes and links of the graph. In addition, the graph view is linked with several views, such as line plots, scatter plots, and correlation matrices, to support locating uncertainties and the analysis of their time dependencies. As demonstration, we use iVUN to quantitatively analyze the dynamics of a model for Epo-induced JAK2/STAT5 signaling. Our case study showed that iVUN can be used to perform an in-depth study of biochemical reaction networks, including attribute uncertainties, correlations between these attributes and their uncertainties as well as the attribute dynamics. In particular, the linking of different visualization options turned out to be highly beneficial for the complex analysis tasks that come with the biological systems as presented here.',
      author:
        'Vehlow, Corinna and Hasenauer, Jan and Kramer, Andrei and Raue, Andreas and Hug, Sabine and Timmer, Jens and Radde, Nicole and Theis, Fabian J and Weiskopf, Daniel',
      doi: '10.1186/1471-2105-14-S19-S2',
      journal: 'BMC Bioinformatics',
      keywords:
        'type:application, time:animation, time:timeline, paradigm:node-link, directed_graph, evaluation:case_study, application:biology',
      number: 'Suppl 19',
      pages: 'S2',
      publisher: 'BioMed Central Ltd',
      references: 'Beck2009Aesthetic Westenberg2008Visualizing',
      title:
        '{iVUN}: interactive Visualization of Uncertain biochemical reaction Networks',
      type: 'article',
      volume: '14',
      year: '2013',
    },
    Vehlow2014Visualizing: {
      abstract:
        'The community structure of graphs is an important feature that gives insight into the high-level organization of objects within the graph. In real-world systems, the graph topology is oftentimes not static but changes over time and hence, also the community structure changes. Previous timeline-based approaches either visualize the dynamic graph or the dynamic community structure. In contrast, our approach combines both in a single image and therefore allows users to investigate the community structure together with the underlying dynamic graph. Our optimized ordering of vertices and selection of colors in combination with interactive highlighting techniques increases the traceability of communities along the time axis. Users can identify visual signatures, estimate the reliability of the derived community structure, and investigate whether community evolution interacts with changes in the graph topology. The utility of our approach is demonstrated in two application examples.',
      author:
        'Vehlow, Corinna and Beck, Fabian and Auw\\"{a}rter, Patrick and Weiskopf, Daniel',
      doi: '10.1111/cgf.12512',
      journal: 'Computer Graphics Forum',
      keywords:
        'type:technique, application:social, application:sports, time:timeline, paradigm:node-link, evaluation:case_study, clustering, compound_graph, linear_arrangement, juxtaposed_node-link, force-directed_layout',
      number: '1',
      pages: '277--288',
      references:
        'Archambault2011Animation Beck2014State Burch2011Parallel Frishman2004Dynamic Greilich2009Visualizing Hu2012Embedding Kumar2006Visual Misue1995Layout Mashima2012Visualizing Rufiange2013DiffAni Reitz2009Focused',
      title: 'Visualizing the Evolution of Communities in Dynamic Graphs',
      type: 'article',
      volume: '34',
      year: '2014',
    },
    Vehlow2015State: {
      abstract:
        'Graph visualizations encode relationships between objects. Abstracting the objects into group structures provides an overview of the data. Groups can be disjoint or overlapping, and might be organized hierarchically. However, the underlying graph still needs to be represented for analyzing the data in more depth. This work surveys research in visualizing group structures as part of graph diagrams. A particular focus is the explicit visual encoding of groups, rather than only using graph layout to implicitly indicate groups. We introduce a taxonomy of visualization techniques structuring the field into four main categories: visual node attributes vary properties of the node representation to encode the grouping, juxtaposed approaches use two separate visualizations, superimposed techniques work with two aligned visual layers, and embedded visualizations tightly integrate group and graph representation. We discuss results from evaluations of those techniques as well as main areas of application. Finally, we report future challenges based on interviews we conducted with leading researchers of the field.',
      author: 'Vehlow, Corinna and Beck, Fabian and Weiskopf, Daniel',
      booktitle: 'Eurographics Conference on Visualization (EuroVis) - STARs',
      doi: '10.2312/eurovisstar.20151110',
      keywords:
        'evaluation:survey, taxonomy, time:generic, paradigm:generic, application:generic, evaluation:survey, type:evaluation',
      publisher: 'The Eurographics Association',
      references:
        'Ahmed2010Visual Beck2014State Beck2012Rapid Burch2008TimeRadarTrees Burch2010TimeSpiderTrees Burch2011Layered Bach2014GraphDiaries Burch2013MatrixBased Burch2011Parallel Frishman2004Dynamic Greilich2009Visualizing Gilbert2011Communities Kumar2006Visual Reitz2009Focused Vehlow2013Radial Vehlow2013iVUN vonLandesberger2011Visual',
      series: 'EuroVis',
      title: 'The State of the Art in Visualizing Group Structures in Graphs',
      type: 'inproceedings',
      year: '2015',
    },
    Westenberg2008Visualizing: {
      abstract:
        'DNA microarrays are used to measure the expression levels of thousands of genes simultaneously. In a time series experiment, the gene expressions are measured as a function of time. We present an application for integrated visualization of genome expression and network dynamics in both regulatory networks and metabolic pathways. Integration of these two levels of cellular processes is necessary, since it provides the link between the measurements at the transcriptional level (gene expression levels approximated from microarray data) and the phenotype (the observable characteristics of an organism) at the functional and behavioral level. The integration requires visualization approaches besides traditional clustering and statistical analysis methods. Our application can (i) visualize the data from time series experiments in the context of a regulatory network and KEGG metabolic pathways; (ii) identify and visualize active regulatory subnetworks from the gene expression data; (iii) perform a statistical test to identify and subsequently visualize pathways that are affected by differentially expressed genes. We present a case study, which demonstrates that our approach and application both facilitates and speeds up data analysis tremendously in comparison to a more traditional approach that involves many manual, laborious, and error-prone steps.',
      author:
        'Westenberg, Michel A and Van Hijum, Sacha AFT and Kuipers, Oscar P and Roerdink, Jos BTM',
      doi: '10.1111/j.1467-8659.2008.01221.x',
      journal: 'Computer Graphics Forum',
      keywords:
        'type:application, time:timeline, paradigm:node-link, evaluation:case_study, application:biology',
      number: '3',
      pages: '887--894',
      publisher: 'Blackwell Publishing Ltd',
      series: 'CGF',
      title:
        'Visualizing genome expression and regulatory network dynamics in genomic and metabolic context',
      type: 'article',
      volume: '27',
      year: '2008',
    },
    Windhager2011Visual: {
      abstract:
        'Despite its well-known potential for applied use in organizations, social network analysis seems to fail relevant business analytical requirements in the areas of organizational change and software usability for non-expert users like managers and consultants. This position paper takes on this challenge by outlining a strategy of user-driven software development which aims to shift analytical procedures from the numerical to the visual realm. As network dynamics can be visualized using various methods, a comparative analysis of their respective strengths and weaknesses lays the basis for the suggested integration of additional visual methods into network exploration and interpretation procedures.',
      author: 'Windhager, Florian and Zenk, Lukas and Federico, Paolo',
      doi: '10.1016/j.sbspro.2011.07.056',
      journal: 'Procedia -- Social and Behavioral Sciences',
      keywords:
        'type:evaluation, paradigm:node-link, time:animation, time:timeline, evaluation:survey, application:social, application:business',
      pages: '59--68',
      publisher: 'Elsevier',
      references: 'Bender-deMoll2006Science',
      title:
        'Visual enterprise network analytics -- visualizing organizational change',
      type: 'article',
      volume: '22',
      year: '2011',
    },
    Windhager2015Concept: {
      abstract:
        'Patents, archived as large collections of semi-structured text documents, contain valuable information about historical trends and current states of R\\&D fields, as well as performances of single inventors and companies. Specific methods are needed to unlock this information and enable its insightful analysis by investors, executives, funding agencies, and policy makers. In this position paper, we propose an approach based on modelling patent repositories as multivariate temporal networks, and examining them by the means of specific visual analytics methods. We illustrate the potential of our approach by discussing two use-cases: the determination of emerging research fields in general and within companies, as well as the identification of inventors characterized by different temporal paths of productivity.',
      author:
        "Windhager, Florian and Amor-Amor{\\'o}s, Albert and Smuc, Michael and Federico, Paolo and Zenk, Lukas and Miksch, Silvia",
      booktitle:
        'Proceedings of the 6th International Conference on Information Visualization Theory and Applications',
      doi: '10.5220/0005360002680273',
      keywords:
        'type:application, application:document, time:generic, paradigm:generic, evaluation:case_study',
      pages: '268-273',
      references: 'Beck2014State',
      series: 'IVAPP',
      title:
        'A concept for the exploratory visualization of patent network dynamics',
      type: 'conference',
      year: '2015',
    },
    Yang2008Visual: {
      abstract:
        'In this article we describe a visual-analytic tool for the interrogation of evolving interaction network data such as those found in social, bibliometric, WWW and biological applications. The tool we have developed incorporates common visualization paradigms such as zooming, coarsening and filtering while naturally integrating information extracted by a previously described event-driven framework for characterizing the evolution of such networks. The visual front-end provides features that are specifically useful in the analysis of interaction networks, capturing the dynamic nature of both individual entities as well as interactions among them. The tool provides the user with the option of selecting multiple views, designed to capture different aspects of the evolving graph from the perspective of a node, a community or a subset of nodes of interest. Standard visual templates and cues are used to highlight critical changes that have occurred during the evolution of the network. A key challenge we address in this work is that of scalability - handling large graphs both in terms of the efficiency of the back-end, and in terms of the efficiency of the visual layout and rendering. Two case studies based on bibliometric and Wikipedia data are presented to demonstrate the utility of the toolkit for visual knowledge discovery.',
      author:
        'Yang, Xintian and Asur, Sitaram and Parthasarathy, Srinivasan and Mehta, Sameep',
      booktitle:
        'Proceedings of the 14th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining',
      doi: '10.1145/1401890.1402011',
      keywords:
        'paradigm:node-link, application:document, compound_graph, time:animation, evaluation:case_study, type:application',
      pages: '1016--1024',
      publisher: 'ACM',
      references: 'Kumar2006Visual',
      series: 'KDD',
      title: 'A visual-analytic toolkit for dynamic interaction graphs',
      type: 'inproceedings',
      year: '2008',
    },
    Yi2010TimeMatrix: {
      abstract:
        'Visualization plays a crucial role in understanding dynamic social networks at many different levels (i.e., group, subgroup, and individual). Node-link-based visualization techniques are currently widely used for these tasks and have been demonstrated to be effective, but it was found that they also have limitations in representing temporal changes, particularly at the individual and subgroup levels. To overcome these limitations, this article presents a new network visualization technique, called  \u201d TimeMatrix,\u201d based on a matrix representation. Interaction techniques, such as overlay controls, a temporal range slider, semantic zooming, and integrated network statistical measures, support analysts in studying temporal social networks. To validate the design, the article presents a user study involving three social scientists analyzing inter-organizational collaboration data. The study demonstrates how TimeMatrix may help analysts gain insights about the temporal aspects of network data that can be subsequently tested with network analytic methods.',
      author: 'Yi, Ji Soo and Elmqvist, Niklas and Lee, Seungyoon',
      doi: '10.1080/10447318.2010.516722',
      journal: 'International Journal of Human-Computer Interaction',
      keywords:
        'type:technique, paradigm:matrix, time:timeline, evaluation:expert, application:social, sparklines, compound_graph, directed_graph, multivariate_graph, tasks, intra-cell_timelines',
      number: '11-12',
      pages: '1031--1051',
      publisher: 'Taylor \\& Francis',
      references: 'Brandes2003Visual Moody2005Dynamic',
      title:
        '{TimeMatrix}: Analyzing Temporal Social Networks Using Interactive Matrix-Based Visualizations',
      type: 'article',
      volume: '26',
      year: '2010',
    },
    Zaidi2014Analysis: {
      abstract:
        'This chapter provides an overview of the different techniques and methods that exist for the analysis and visualization of dynamic networks. Basic definitions and formal notations are discussed and important references are cited. A major reason for the popularity of the field of dynamic networks is its applicability in a number of diverse fields. The field of dynamic networks is in its infancy and there are so many avenues that need to be explored. From developing network generation models to developing temporal metrics and measures, from structural analysis to visual analysis, there is room for further exploration in almost every dimension where dynamic networks are studied. Recently, with the availability of dynamic data from various fields, the empirical study and experimentation with real data sets has also helped maturate the field. Furthermore, researchers have started to develop foundations and theories based on these datasets which in turn has resulted lots of activity among research communities.',
      author: 'Zaidi, Faraz and Muelder, Chris and Sallaberry, Arnaud',
      journal: 'arXiv preprint arXiv:1409.5034',
      keywords:
        'evaluation:survey, type:evaluation, time:generic, paradigm:node-link, application:generic',
      references:
        'Burch2011Parallel Frishman2008Online Gilbert2011Communities Hu2012Embedding Moody2005Dynamic',
      series: 'arXiv',
      title: 'Analysis and Visualization of Dynamic Networks',
      type: 'article',
      url: 'http://arxiv.org/abs/1409.5034',
      year: '2014',
    },
    Zaman2011Effect: {
      abstract:
        'We present a new system for visualizing and merging differences in diagrams that uses animation, dual views, a storyboard, relative re-layout, and layering. We ran two user studies investigating the benefits of the system. The first user study compared pairs of hierarchical diagrams with matching node positions. The results underscore that na\u00efve dual-view visualization is undesirable. On the positive side, participants particularly liked the dual-view with difference layer technique. The second user study focused on diagrams with partially varying node positions and difference visualization and animation. We found evidence that both techniques are beneficial, and that the combination was preferred.',
      author: 'Zaman, Loutfouz and Kalra, Ashish and Stuerzlinger, Wolfgang',
      booktitle: 'Proceedings of Graphics Interface 2011',
      keywords:
        'mental\\_map, graph\\_difference, time:animation, time:timeline, paradigm:node-link, type:evaluation, evaluation:user\\_study, application:business',
      pages: '183--190',
      publisher: 'Canadian Human-Computer Communications Society',
      references:
        'Archambault2011Animation Archambault2011Difference Diehl2002Graphs Farrugia2011Effective Purchase2007Important Purchase2008Extremes Saffrey2008Mental',
      series: 'GI',
      title:
        'The Effect of Animation, Dual View, Difference Layers, and Relative Re-Layout in Hierarchical Diagram Differencing',
      type: 'inproceedings',
      year: '2011',
    },
    vandenElzen2013Dynamic: {
      abstract:
        'Networks are present in many fields such as finance, sociology, and transportation. Often these networks are dynamic: they have a structural as well as a temporal aspect. In addition to relations occurring over time, node information is frequently present such as hierarchical structure or time-series data. We present a technique that extends the Massive Sequence View (MSV) for the analysis of temporal and structural aspects of dynamic networks. Using features in the data as well as Gestalt principles in the visualization such as closure, proximity, and similarity, we developed node reordering strategies for the MSV to make these features stand out that optionally take the hierarchical node structure into account. This enables users to find temporal properties such as trends, counter trends, periodicity, temporal shifts, and anomalies in the network as well as structural properties such as communities and stars. We introduce the circular MSV that further reduces visual clutter. In addition, the (circular) MSV is extended to also convey time-series data associated with the nodes. This enables users to analyze complex correlations between edge occurrence and node attribute changes. We show the effectiveness of the reordering methods on both synthetic and a rich real-world dynamic network data set.',
      author:
        'van den Elzen, Stef and Holten, Danny and Blaas, Jorik and van Wijk, Jarke J',
      comment: 'Extended version of a PacificVis 13 paper.',
      doi: '10.1109/TVCG.2013.263',
      issn: '1077-2626',
      journal: 'IEEE Transactions on Visualization and Computer Graphics',
      keywords:
        'paradigm:node-link, time:timeline, evaluation:case_study, evaluation:case_study, type:technique, linear\\_arrangement, radial, compound_graph, integrated_node-link, application:business, application:social',
      number: '8',
      pages: '1087-1099',
      references:
        'Kumar2006Visual Reitz2009Focused Farrugia2011Exploring Federico2011Visual Burch2010TimeSpiderTrees Burch2008TimeRadarTrees Burch2011Layered Burch2011Parallel Greilich2009Visualizing',
      series: 'TVCG',
      title:
        'Dynamic Network Visualization with Extended Massive Sequence Views',
      type: 'article',
      volume: '20',
      year: '2013',
    },
    vonLandesberger2011Visual: {
      abstract:
        'The analysis of large graphs plays a prominent role in various fields of research and is relevant in many important application areas. Effective visual analysis of graphs requires appropriate visual presentations in combination with respective user interaction facilities and algorithmic graph analysis methods. How to design appropriate graph analysis systems depends on many factors, including the type of graph describing the data, the analytical task at hand, and the applicability of graph analysis methods. The most recent surveys of graph visualization and navigation techniques were presented by Herman et al. [HMM00] and Diaz [DPS02]. The first work surveyed the main techniques for visualization of hierarchies and graphs in general that had been introduced until 2000. The second work concentrated on graph layouts introduced until 2002. Recently, new techniques have been developed covering a broader range of graph types, such as time-varying graphs. Also, in accordance with ever growing amounts of graph-structured data becoming available, the inclusion of algorithmic graph analysis and interaction techniques becomes increasingly important. In this State-of-the-Art Report, we survey available techniques for the visual analysis of large graphs. Our review firstly considers graph visualization techniques according to the type of graphs supported. The visualization techniques form the basis for the presentation of interaction approaches suitable for visual graph exploration. As an important component of visual graph analysis, we discuss various graph algorithmic aspects useful for the different stages of the visual graph analysis process.',
      author:
        'von Landesberger, Tatiana and Kuijper, Arjan and Schreck, Tobias and Kohlhammer, J\\"orn and van Wijk, Jarke J and Fekete, Jean-Daniel and Fellner, Dieter W',
      doi: '10.1111/j.1467-8659.2011.01898.x',
      journal: 'Computer Graphics Forum',
      keywords:
        'type:evaluation, paradigm:generic, time:animation, time:timeline, evaluation:survey, application:generic',
      number: '6',
      pages: '1719--1749',
      references:
        'Beck2009Aesthetic Burch2008TimeRadarTrees Diehl2001Preserving Frishman2004Dynamic Frishman2008Online Greilich2009Visualizing Kumar2006Visual Reitz2009Focused Saraiya2005Visualization',
      series: 'CGF',
      title: 'Visual Analysis of Large Graphs',
      type: 'article',
      volume: '30',
      year: '2011',
    },
    vonLandesberger2013Visual: {
      abstract:
        'Contagion is a process whereby the collapse of a node in a network leads to the collapse of neighboring nodes and thereby sets off a chain reaction in the network. It thus creates a special type of time-dependent network. Such processes are studied in various applications, for example, in financial network analysis, infection diffusion prediction, supply-chain management, or gene regulation. Visual analytics methods can help analysts examine contagion effects. For this purpose, network visualizations need to be complemented with specific features to illustrate the contagion process. Moreover, new visual analysis techniques for comparison of contagion need to be developed. In this paper, we propose a system geared to the visual analysis of contagion. It includes the simulation of contagion effects as well as their visual exploration. We present new tools able to compare the evolution of the different contagion processes. In this way, propagation of disturbances can be effectively analyzed. We focus on financial networks; however, our system can be applied to other use cases as well.',
      author:
        'von Landesberger, Tatiana and Diel, Simon and Bremm, Sebastian and Fellner, Dieter W',
      doi: '10.1177/1473871613487087',
      journal: 'Information Visualization',
      keywords:
        'type:application, paradigm:node-link, time:animation, evaluation:case\\_study, application:business',
      publisher: 'SAGE Publications',
      references: 'Cohen1995Dynamic Kumar2006Visual Brandes2003Visual',
      title: 'Visual analysis of contagion in networks',
      type: 'article',
      year: '2013',
    },
  },
});
