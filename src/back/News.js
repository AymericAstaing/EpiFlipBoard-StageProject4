export default function getNewsData(data) {
	fetch("https://newsapi.org/v2/top-headlines?country=fr&category="+data+"&apiKey=1464c49870b44de697bed55c8fb487d6")
      .then(response => response.json())
      .then(data => this.setState({news: data}))
}

// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1464c49870b44de697bed55c8fb487d6

// https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1464c49870b44de697bed55c8fb487d6

// https://newsapi.org/v2/sources?language=en&country=us&apiKey=1464c49870b44de697bed55c8fb487d6

// https://newsapi.org/v2/everything?q=apple&from=2020-07-01&to=2020-07-01&sortBy=popularity&apiKey=1464c49870b44de697bed55c8fb487d6

// categorie : business entertainment general health science sports technology

// langue : ar de en es fr he it nl no pt ru se ud zh

// pays : ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za