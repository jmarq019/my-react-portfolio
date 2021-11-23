import React from 'react';

export default function Blog() {
  return (
    <div>
    <h1 class="jumbotron display-4 text-center">My Work</h1>
    
    <div class="card-deck">
      <div class="card">
        <img src="/tech-blog.png" class="card-img-top" alt="tech blog screenshot"/>
        <div class="card-body">
        <h5 class="card-title">Mini Tech blog</h5>
        <p class="card-text">This is a fullstack application featuring a mySQL database and frontend built using handlebars. The color scheme is simple and aims to reduce eye-strain. This app allows you to create an account to make blog posts and add comments on posts.</p>
        <ul class="list-group list-group-horizontal">
        <li class="list-group-item">
        <a href="https://github.com/jmarq019/mini_tech_blog" target="_blank" rel="noopener noreferrer">
        <img alt="github icon" src="/github.png"/>
        </a>
        </li>
        <li class="list-group-item">
        <a href="https://jorgeminitechblog.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <img alt="heroku icon" src="/heroku.png"/>
        </a>
        </li>
        </ul>
        </div>
      </div>
      <div class="card">
        <img src="/manatee-clicker.png" class="card-img-top" alt="manatee clicker screenshot"/>
        <div class="card-body">
        <h5 class="card-title">Manatee Clicker</h5>
        <p class="card-text">This is another fullstack application developed as part of a group project. My contribution was developping the front-end javascript for this app. Manatee clicker allows you to click to earn points which you can use to collect manatees, which increase your potential to earn points</p>
        <ul class="list-group list-group-horizontal">
        <li class="list-group-item">
        <a href="https://github.com/POlsen-92/Manatee-Clicker" target="_blank" rel="noopener noreferrer">
        <img alt="github icon" src="/github.png"/>
        </a>
        </li>
        <li className="list-group-item">
        <a href="https://manatee-clicker.herokuapp.com/leaderboard" target="_blank" rel="noopener noreferrer">
        <img alt="heroku icon" src="/heroku.png"/>
        </a>
        </li>
        </ul>        
        </div>
      </div>
      <div class="card">
        <img src="weather-dashboard.png" class="card-img-top" alt="weather dashboard screenshot"/>
        <div class="card-body">
        <h5 class="card-title">Weather Dashboard</h5>
        <p class="card-text">How's the weather? This app will let you know just that. This front-end application pulls weather data when you search for your city. The app pulls the data from Openweather's API and shows you the current weather as well as the five-day forecast. Additional features include saving your searched cities to local storage so that you can revisit them easily.</p>
        <ul class="list-group list-group-horizontal">
        <li class="list-group-item">
        <a href="https://github.com/jmarq019/weather_dashboard" target="_blank" rel="noopener noreferrer">
        <img alt="github icon" src="/github.png"/>
        </a>
        </li>
        <li class="list-group-item">
        <a href="https://jmarq019.github.io/weather_dashboard/" target="_blank" rel="noopener noreferrer">
        <img alt="internet icon" src="/internet.png"/>
        </a>
        </li>
        </ul>
        </div>
      </div>
    </div>

  </div>
  );
}