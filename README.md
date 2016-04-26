<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-2ba71e22c2db6ac43901e1e30abf4ab38b45568bcb7ce203ba904a1b4c773a3c.css" integrity="sha256-K6ceIsLbasQ5AeHjCr9Ks4tFVovLfOIDupBKG0x3Ojw=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-6ea92208a310f289418159a4ed57aae089fbc83e376d5d3d8d6a07a2cf0e3887.css" integrity="sha256-bqkiCKMQ8olBgVmk7Veq4In7yD43bV09jWoHos8OOIc=" media="all" rel="stylesheet" />
    
    
    
    

    <link as="script" href="https://assets-cdn.github.com/assets/frameworks-1c3977312b0fcfeb3bfb351eeca160b7eb5f271c3cea4ed417dd9f31cf83d1dd.js" rel="preload" />
    
    <link as="script" href="https://assets-cdn.github.com/assets/github-f83ae2f0d483dddc8f1894b3cc2709ff1db48511ddc8d054ed639c52c80d54c9.js" rel="preload" />

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>WebpackTutorial/README.md at master · AriaFallah/WebpackTutorial</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars3.githubusercontent.com/u/9424976?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="AriaFallah/WebpackTutorial" name="twitter:title" /><meta content="WebpackTutorial - A simple webpack tutorial" name="twitter:description" />
      <meta content="https://avatars3.githubusercontent.com/u/9424976?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="AriaFallah/WebpackTutorial" property="og:title" /><meta content="https://github.com/AriaFallah/WebpackTutorial" property="og:url" /><meta content="WebpackTutorial - A simple webpack tutorial" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTU2MzQyMDQ6YjViZGNmYzY5MTEyNzQ4NGY3Mjc1MDNhMzUwOWVkMzU6ZDJjNzgwZDU5NmQ4ZDI0ODEyNzRkZjkxM2Q4ODJkNWNjMGMwNDc2NzAyZWVkM2I0ODBkNzI3OTczY2NjNmI1ZQ==--97aad2e651441c005f653d666f3dc8c304d64fdf">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="6FCCC502:087C:A531E7:571EC71C" name="octolytics-dimension-request_id" /><meta content="15634204" name="octolytics-actor-id" /><meta content="94dreamer" name="octolytics-actor-login" /><meta content="4d831aae25647f36ef685221889c634c1287f51e9383eff6eb5975c420805516" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="94dreamer">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="Y2Y1MmJjMjkwMzUxZmJmODNkOTYzZDgyMjgyZDYyYWM1ZmRmZDQxMGUyNTY0ODUxZjQyMWQ4MmU0NTkwNjEyZnx7InJlbW90ZV9hZGRyZXNzIjoiMTExLjIwNC4xOTcuMiIsInJlcXVlc3RfaWQiOiI2RkNDQzUwMjowODdDOkE1MzFFNzo1NzFFQzcxQyIsInRpbWVzdGFtcCI6MTQ2MTYzNDg0NX0=">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="38c3b6ac46afcbf6a80dd5f3482a6c19d0fd1189" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="47d21165211f627c2cc7d1fa84176b82">
    

      
  <meta name="description" content="WebpackTutorial - A simple webpack tutorial">
  <meta name="go-import" content="github.com/AriaFallah/WebpackTutorial git https://github.com/AriaFallah/WebpackTutorial.git">

  <meta content="9424976" name="octolytics-dimension-user_id" /><meta content="AriaFallah" name="octolytics-dimension-user_login" /><meta content="51025772" name="octolytics-dimension-repository_id" /><meta content="AriaFallah/WebpackTutorial" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="51025772" name="octolytics-dimension-repository_network_root_id" /><meta content="AriaFallah/WebpackTutorial" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/AriaFallah/WebpackTutorial/commits/master.atom" rel="alternate" title="Recent Commits to WebpackTutorial:master" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/AriaFallah/WebpackTutorial/blob/master/part1/README.md" data-pjax-transient>
  </head>


  <body class="logged-in   env-production windows vis-public page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/AriaFallah/WebpackTutorial/search" class="js-site-search-form" data-scoped-search-url="/AriaFallah/WebpackTutorial/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        tabindex="1"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="notification-changed-v2:15634204" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
        <span class="mail-status "></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 12v1H0v-1l0.73-0.58c0.77-0.77 0.81-2.55 1.19-4.42 0.77-3.77 4.08-5 4.08-5 0-0.55 0.45-1 1-1s1 0.45 1 1c0 0 3.39 1.23 4.16 5 0.38 1.88 0.42 3.66 1.19 4.42l0.66 0.58z m-7 4c1.11 0 2-0.89 2-2H5c0 1.11 0.89 2 2 2z"></path></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 9H7v5H5V9H0V7h5V2h2v5h5v2z"></path></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="AriaFallah/WebpackTutorial">This repository</span>
  </div>
    <a class="dropdown-item" href="/AriaFallah/WebpackTutorial/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/94dreamer"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@94dreamer" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/15634204?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">94dreamer</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/94dreamer" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
          <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
            Explore
          </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>


          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="38c3b6ac46afcbf6a80dd5f3482a6c19d0fd1189" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="xdhxhViTsv5WvIlxhnsLKRxKVKn/3Pn48wsLDbB5KWZFQVhxBVL8nqhnDhKayfVm+/Lxck0P8e7opgZ6Xqr1ug==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="38c3b6ac46afcbf6a80dd5f3482a6c19d0fd1189" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="kZtKhVmKjE5JUMUuDgH9bUXBr7de+C2oQ+6tHO7fI26JZaMV+k1N9esTZyEqL2hyUFqKHNLFWJEVX5hzUUgy8A==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="51025772" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/AriaFallah/WebpackTutorial/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/AriaFallah/WebpackTutorial/watchers">
            56
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6c4.94 0 7.94-6 7.94-6S13 2 8.06 2z m-0.06 10c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4z m2-4c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z"></path></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 2.81v10.38c0 0.67-0.81 1-1.28 0.53L3 10H1c-0.55 0-1-0.45-1-1V7c0-0.55 0.45-1 1-1h2l3.72-3.72c0.47-0.47 1.28-0.14 1.28 0.53z m7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06 1.97 1.97-1.97 1.97 1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06-1.97-1.97 1.97-1.97z"></path></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/AriaFallah/WebpackTutorial/unstar" class="js-toggler-form starred" data-form-nonce="38c3b6ac46afcbf6a80dd5f3482a6c19d0fd1189" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="N7dIFv6gnxfTBX95q2NmC7HwXUzLkj4vwIKGVJ73LoP847xy9FYECPT/nmwkwkXAqQHrmuFfvrpgfhPnDYflfw==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar AriaFallah/WebpackTutorial"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/AriaFallah/WebpackTutorial/stargazers">
          1,487
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/AriaFallah/WebpackTutorial/star" class="js-toggler-form unstarred" data-form-nonce="38c3b6ac46afcbf6a80dd5f3482a6c19d0fd1189" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="uHAgbh6wjhKVqVFaTrECK0PHsGjypagD74Ka60FCN56AIKbvM1x69ZHvdKgc7FMr/IC/R6PI+cZStlmBOuEE0w==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star AriaFallah/WebpackTutorial"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z"></path></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/AriaFallah/WebpackTutorial/stargazers">
          1,487
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/AriaFallah/WebpackTutorial/fork" class="btn-with-count" data-form-nonce="38c3b6ac46afcbf6a80dd5f3482a6c19d0fd1189" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="bZNCWtXF8qcKZmRFlNykrbUNp6/OyaDf8F/kdNK5ah6Zc71rZeQou3LgDJ33NiQ+SxI/Fc/CRsYyOipm2no1Vg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of AriaFallah/WebpackTutorial to your account"
                aria-label="Fork your own copy of AriaFallah/WebpackTutorial to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
              Fork
            </button>
</form>
    <a href="/AriaFallah/WebpackTutorial/network" class="social-count">
      80
    </a>
  </li>
</ul>

    <h1 class="entry-title public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z"></path></svg>
  <span class="author" itemprop="author"><a href="/AriaFallah" class="url fn" rel="author">AriaFallah</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/AriaFallah/WebpackTutorial" data-pjax="#js-repo-pjax-container">WebpackTutorial</a></strong>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/AriaFallah/WebpackTutorial" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /AriaFallah/WebpackTutorial" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M9.5 3l-1.5 1.5 3.5 3.5L8 11.5l1.5 1.5 4.5-5L9.5 3zM4.5 3L0 8l4.5 5 1.5-1.5L2.5 8l3.5-3.5L4.5 3z"></path></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/AriaFallah/WebpackTutorial/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /AriaFallah/WebpackTutorial/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z"></path></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">1</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/AriaFallah/WebpackTutorial/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /AriaFallah/WebpackTutorial/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M11 11.28c0-1.73 0-6.28 0-6.28-0.03-0.78-0.34-1.47-0.94-2.06s-1.28-0.91-2.06-0.94c0 0-1.02 0-1 0V0L4 3l3 3V4h1c0.27 0.02 0.48 0.11 0.69 0.31s0.3 0.42 0.31 0.69v6.28c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72z m-1 2.92c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2zM4 3c0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72 0 1.55 0 5.56 0 6.56-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V4.72c0.59-0.34 1-0.98 1-1.72z m-0.8 10c0 0.66-0.55 1.2-1.2 1.2s-1.2-0.55-1.2-1.2 0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2z m-1.2-8.8c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z"></path></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/AriaFallah/WebpackTutorial/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /AriaFallah/WebpackTutorial/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M2 5h4v1H2v-1z m0 3h4v-1H2v1z m0 2h4v-1H2v1z m11-5H9v1h4v-1z m0 2H9v1h4v-1z m0 2H9v1h4v-1z m2-6v9c0 0.55-0.45 1-1 1H8.5l-1 1-1-1H1c-0.55 0-1-0.45-1-1V3c0-0.55 0.45-1 1-1h5.5l1 1 1-1h5.5c0.55 0 1 0.45 1 1z m-8 0.5l-0.5-0.5H1v9h6V3.5z m7-0.5H8.5l-0.5 0.5v8.5h6V3z"></path></svg>
      Wiki
</a>

  <a href="/AriaFallah/WebpackTutorial/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /AriaFallah/WebpackTutorial/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0V10h3.6L4.5 8.2l0.9 5.4L9 8.5l1.6 1.5H14V8H11.5z"></path></svg>
    Pulse
</a>
  <a href="/AriaFallah/WebpackTutorial/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /AriaFallah/WebpackTutorial/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M16 14v1H0V0h1v14h15z m-11-1H3V8h2v5z m4 0H7V3h2v10z m4 0H11V6h2v7z"></path></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/AriaFallah/WebpackTutorial/blob/335bed7f03510654c44ee73077efc6314ce903bb/part1/README.md" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:811d26737d4f03236fc9a11ec34f7c1c -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/AriaFallah/WebpackTutorial/blob/master/part1/README.md"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M12 5L4 13 0 9l1.5-1.5 2.5 2.5 6.5-6.5 1.5 1.5z"></path></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/AriaFallah/WebpackTutorial/find/master"
          class="js-pjax-capture-input btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/AriaFallah/WebpackTutorial"><span>WebpackTutorial</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/AriaFallah/WebpackTutorial/tree/master/part1"><span>part1</span></a></span><span class="separator">/</span><strong class="final-path">README.md</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/AriaFallah/WebpackTutorial/commit/47a52341215b0283570d7d2288d5904712205444" data-pjax>
          47a5234
        </a>
        <time datetime="2016-02-16T17:31:45Z" is="relative-time">Feb 16, 2016</time>
      </span>
      <div>
        <img alt="@AriaFallah" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/9424976?v=3&amp;s=40" width="20" />
        <a href="/AriaFallah" class="user-mention" rel="author">AriaFallah</a>
          <a href="/AriaFallah/WebpackTutorial/commit/47a52341215b0283570d7d2288d5904712205444" class="message" data-pjax="true" title=":memo: merge pull requests"><img class="emoji" title=":memo:" alt=":memo:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f4dd.png" height="20" width="20" align="absmiddle"> merge pull requests</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>4</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="AriaFallah" href="/AriaFallah/WebpackTutorial/commits/master/part1/README.md?author=AriaFallah"><img alt="@AriaFallah" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/9424976?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mmurkidjanian" href="/AriaFallah/WebpackTutorial/commits/master/part1/README.md?author=mmurkidjanian"><img alt="@mmurkidjanian" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/12477950?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jonaustin" href="/AriaFallah/WebpackTutorial/commits/master/part1/README.md?author=jonaustin"><img alt="@jonaustin" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/75474?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="paulkogel" href="/AriaFallah/WebpackTutorial/commits/master/part1/README.md?author=paulkogel"><img alt="@paulkogel" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/513255?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@AriaFallah" height="24" src="https://avatars2.githubusercontent.com/u/9424976?v=3&amp;s=48" width="24" />
            <a href="/AriaFallah">AriaFallah</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@mmurkidjanian" height="24" src="https://avatars0.githubusercontent.com/u/12477950?v=3&amp;s=48" width="24" />
            <a href="/mmurkidjanian">mmurkidjanian</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@jonaustin" height="24" src="https://avatars1.githubusercontent.com/u/75474?v=3&amp;s=48" width="24" />
            <a href="/jonaustin">jonaustin</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@paulkogel" height="24" src="https://avatars0.githubusercontent.com/u/513255?v=3&amp;s=48" width="24" />
            <a href="/paulkogel">paulkogel</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/AriaFallah/WebpackTutorial/raw/master/part1/README.md" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/AriaFallah/WebpackTutorial/blame/master/part1/README.md" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/AriaFallah/WebpackTutorial/commits/master/part1/README.md" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15 2H1c-0.55 0-1 0.45-1 1v9c0 0.55 0.45 1 1 1h5.34c-0.25 0.61-0.86 1.39-2.34 2h8c-1.48-0.61-2.09-1.39-2.34-2h5.34c0.55 0 1-0.45 1-1V3c0-0.55-0.45-1-1-1z m0 9H1V3h14v8z"></path></svg>
        </a>

        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/AriaFallah/WebpackTutorial/edit/master/part1/README.md" class="inline-form js-update-url-with-hash" data-form-nonce="38c3b6ac46afcbf6a80dd5f3482a6c19d0fd1189" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="7vQrgyVxVHqXO2cJYjHrznfHtRCSmRrlX5XNJCwoDJksIcZ9jW5i9ec6aa06GhjPQ+WbJVCNa0AmaIthVHOjYQ==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path d="M0 12v3h3l8-8-3-3L0 12z m3 2H1V12h1v1h1v1z m10.3-9.3l-1.3 1.3-3-3 1.3-1.3c0.39-0.39 1.02-0.39 1.41 0l1.59 1.59c0.39 0.39 0.39 1.02 0 1.41z"></path></svg>
          </button>
</form>        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/AriaFallah/WebpackTutorial/delete/master/part1/README.md" class="inline-form" data-form-nonce="38c3b6ac46afcbf6a80dd5f3482a6c19d0fd1189" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="P0Hv5iN9fIvVCwzJYYiwmUTBZTIAwkw3lKwTLJrYqsmUgkxUbJsXSiBXYjOBi0Z88c7wQN1XGhlEyd6H7MYTNA==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M10 2H8c0-0.55-0.45-1-1-1H4c-0.55 0-1 0.45-1 1H1c-0.55 0-1 0.45-1 1v1c0 0.55 0.45 1 1 1v9c0 0.55 0.45 1 1 1h7c0.55 0 1-0.45 1-1V5c0.55 0 1-0.45 1-1v-1c0-0.55-0.45-1-1-1z m-1 12H2V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9z m1-10H1v-1h9v1z"></path></svg>
          </button>
</form>  </div>

  <div class="file-info">
      768 lines (575 sloc)
      <span class="file-info-divider"></span>
    23.5 KB
  </div>
</div>

  
  <div id="readme" class="readme blob instapaper_body">
    <article class="markdown-body entry-content" itemprop="text"><h1><a id="user-content-beginner-webpack-tutorial-part-1---introduction-to-webpack-zap" class="anchor" href="#beginner-webpack-tutorial-part-1---introduction-to-webpack-zap" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Beginner Webpack Tutorial Part 1 - Introduction To Webpack <img class="emoji" title=":zap:" alt=":zap:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/26a1.png" height="20" width="20" align="absmiddle"></h1>

<p>This is for the people like me whose first intro to webpack was a repository similar to:</p>

<ul>
<li><a href="https://github.com/davezuko/react-redux-starter-kit">https://github.com/davezuko/react-redux-starter-kit</a></li>
<li><a href="https://github.com/webpack/react-starter">https://github.com/webpack/react-starter</a></li>
</ul>

<p>While these repositories are very well put together, they aren't necessarily the best learning tools.
In my case, I got pretty confused trying to understand what was going on, and scrapped together my
understanding from a lot of scattered resources.</p>

<p>I hope that this tutorial can make Webpack easy to learn.</p>

<h2><a id="user-content-requirements" class="anchor" href="#requirements" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Requirements</h2>

<p>At the very least you are expected to know the basics of node.js and npm.</p>

<h2><a id="user-content-contributing" class="anchor" href="#contributing" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Contributing</h2>

<p>I will gladly accept any and all contributions/corrections. If you have any questions,
feel free to leave them as issues. If I made mistakes, please point them out. Finally, if you feel
that I left anything out, or could have explained something better make sure to leave an issue or
make a pull request.</p>

<h2><a id="user-content-table-of-contents" class="anchor" href="#table-of-contents" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Table of Contents</h2>

<ul>
<li><a href="#why-webpack">Why Webpack?</a></li>
<li><a href="#the-basics">The Basics</a>

<ul>
<li><a href="#installation">Installation</a></li>
<li><a href="#bundling">Bundling</a></li>
<li><a href="#loaders">Loaders</a></li>
<li><a href="#plugins">Plugins</a></li>
</ul></li>
<li><a href="#your-config-file">Your Config File</a>

<ul>
<li><a href="#a-minimal-example">A Minimal Example</a></li>
<li><a href="#introducing-plugins">Introducing Plugins</a></li>
</ul></li>
<li><a href="#a-more-complete-example">A More Complete Example</a>

<ul>
<li><a href="#introducing-loaders">Introducing Loaders</a></li>
<li><a href="#adding-more-plugins">Adding More Plugins</a></li>
<li><a href="#the-development-server">The Development Server</a></li>
<li><a href="#start-coding">Start Coding</a></li>
</ul></li>
<li><a href="#conclusion">Conclusion</a></li>
<li><a href="#closing-thoughts">Closing Thoughts</a></li>
</ul>

<h2><a id="user-content-why-webpack" class="anchor" href="#why-webpack" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Why Webpack?</h2>

<p>Because every single react/redux tutorial assumes you know it <img class="emoji" title=":cry:" alt=":cry:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f622.png" height="20" width="20" align="absmiddle"></p>

<p>More realistically here are some reasons you would want to use webpack.</p>

<p>Lets you:</p>

<ul>
<li>Bundle your js files into a single file</li>
<li>Use npm packages in your frontend code</li>
<li>Write ES6/ES7 JavaScript (with help from babel)</li>
<li>Minify/Optimize code</li>
<li>Turn LESS/SCSS into CSS</li>
<li>Use HMR (Hot Module Replacement)</li>
<li>Include any type of file into your JavaScript</li>
<li>A lot more advanced stuff, which I won't cover</li>
</ul>

<h5><a id="user-content-why-do-i-want-these-features" class="anchor" href="#why-do-i-want-these-features" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Why do I want these features?</h5>

<ul>
<li><p>Bundle JS files - Lets you write modular JavaScript, but you do not need to include a separate
<code>&lt;script&gt;</code> tag for each JS file. (Configurable in case you do need more than one js file)</p></li>
<li><p>Use npm packages in your frontend code - npm is the biggest ecosystem of open source code on the
internet. Chances are you can save writing code by taking a look at npm, and including the packages
you want in your frontend.</p></li>
<li><p>ES6/ES7 - Adds lots of features to JavaScript that makes it more powerful and easier to write.
<a href="https://github.com/DrkSephy/es6-cheatsheet">Look here for an intro</a>.</p></li>
<li><p>Minify/Optimize Code - Reduces the size of file that you're distributing. Benefits include things
like faster page loads.</p></li>
<li><p>Turn LESS/SCSS into CSS - Nicer way to write CSS.
<a href="http://alistapart.com/article/why-sass">Here's an intro if you're unfamiliar</a>.</p></li>
<li><p>Use HMR - A boost to productivity. Every time you save your code, it gets injected into the page
without requiring a full page refresh. This is really handy if you need to maintain the state of the
page while you are editing your code.</p></li>
<li><p>Include any type of file into your JavaScript - Reduces need for other build tools, and allows you
to programmatically modify/use those files.</p></li>
</ul>

<h2><a id="user-content-the-basics" class="anchor" href="#the-basics" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>The Basics</h2>

<h3><a id="user-content-installation" class="anchor" href="#installation" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Installation</h3>

<p>To use most of the features of webpack you only need a global installation:</p>

<pre><code>npm install -g webpack
</code></pre>

<p>However some features of webpack, such as optimization plugins, require you to have it installed
locally. In which case you'll need to:</p>

<pre><code>npm install --save-dev webpack
</code></pre>

<h3><a id="user-content-the-command-line" class="anchor" href="#the-command-line" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>The Command Line</h3>

<p>To run webpack:</p>

<pre><code>webpack
</code></pre>

<p>If you want webpack to build every time you change a file:</p>

<pre><code>webpack --watch
</code></pre>

<p>If you want to use a config file with webpack with a custom name:</p>

<pre><code>webpack --config myconfig.js
</code></pre>

<h3><a id="user-content-bundling" class="anchor" href="#bundling" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Bundling</h3>

<p><a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example1">Example 1</a></p>

<p><a href="https://camo.githubusercontent.com/9a74871c001b91c18a37fdaa92f48f0fbbdd38bf/687474703a2f2f692e696d6775722e636f6d2f595534784250512e706e67" target="_blank"><img src="https://camo.githubusercontent.com/9a74871c001b91c18a37fdaa92f48f0fbbdd38bf/687474703a2f2f692e696d6775722e636f6d2f595534784250512e706e67" alt="Official Dependency Tree" data-canonical-src="http://i.imgur.com/YU4xBPQ.png" style="max-width:100%;"></a></p>

<p>Webpack is formally referred to as a module bundler. If you want an in-depth and accessible explanation
on modules and module bundling definitely check out these two great articles:
<a href="https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.jw1txw6uh">here</a>
and <a href="https://medium.com/@preethikasireddy/javascript-modules-part-2-module-bundling-5020383cf306#.lfnspler2">here</a>.
We're gonna keep it simple. The way that it works is that you specify a single file as your entry point.
This file will be the root of your tree. Then every time you <code>require</code> a file from another file it's
added to the tree. When you run <code>webpack</code>, all these files/modules are bundled into a single file.</p>

<p>Here's a simple example:</p>

<p><a href="https://camo.githubusercontent.com/8399895a3372963cd4dee5d989aaacadd4134c57/687474703a2f2f692e696d6775722e636f6d2f6453676877774c2e706e67" target="_blank"><img src="https://camo.githubusercontent.com/8399895a3372963cd4dee5d989aaacadd4134c57/687474703a2f2f692e696d6775722e636f6d2f6453676877774c2e706e67" alt="Dependency Tree" data-canonical-src="http://i.imgur.com/dSghwwL.png" style="max-width:100%;"></a></p>

<p>Given this picture you could have the directory:</p>

<pre><code>MyDirectory
|- index.js
|- UIStuff.js
|- APIStuff.js
|- styles.css
|- extraFile.js
</code></pre>

<p>and this could be the content of your files</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// index.js</span>
<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./styles.css<span class="pl-pds">'</span></span>)
<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./UIStuff.js<span class="pl-pds">'</span></span>)
<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./APIStuff.js<span class="pl-pds">'</span></span>)

<span class="pl-c">// UIStuff.js</span>
<span class="pl-k">var</span> React <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>React<span class="pl-pds">'</span></span>)
<span class="pl-smi">React</span>.<span class="pl-en">createClass</span>({
  <span class="pl-c">// stuff</span>
})

<span class="pl-c">// APIStuff.js</span>
<span class="pl-k">var</span> fetch <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>fetch<span class="pl-pds">'</span></span>) <span class="pl-c">// fetch polyfill</span>
<span class="pl-en">fetch</span>(<span class="pl-s"><span class="pl-pds">'</span>https://google.com<span class="pl-pds">'</span></span>)</pre></div>

<div class="highlight highlight-source-css"><pre><span class="pl-c">/* styles.css */</span>
<span class="pl-ent">body</span> {
  <span class="pl-c1"><span class="pl-c1">background-color</span></span>: <span class="pl-c1">rgb</span>(<span class="pl-c1">200, 56, 97</span>);
}</pre></div>

<p>When you run <code>webpack</code>, you'll get a bundle with the contents of this tree, but <code>extraFile.js</code>,
which was in the same directory, will not be part of the bundle because it was never <code>required</code>.</p>

<p><code>bundle.js</code> will look like:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// contents of styles.css</span>
<span class="pl-c">// contents of UIStuff.js + React</span>
<span class="pl-c">// contents of APIStuff.js + fetch</span></pre></div>

<p>The things that are bundled are only the things that you explicitly required across your files.</p>

<h3><a id="user-content-loaders" class="anchor" href="#loaders" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Loaders</h3>

<p>As you probably noticed, I did something strange in the above example. I <code>required</code> a css file in
a JavaScript file.</p>

<p>The really cool, and interesting thing about webpack is that you can <code>require</code> more than just
JavaScript files.</p>

<p>There is this thing in webpack called a loader. Using these loaders, you can
<code>require</code> anything from <code>.css</code> and <code>.html</code> to <code>.png</code> files.</p>

<p>For example in the diagram above I had</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// index.js</span>
<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./styles.css<span class="pl-pds">'</span></span>)</pre></div>

<p>If I include <a href="https://github.com/webpack/style-loader">the style-loader</a> and the <a href="https://github.com/webpack/css-loader">the css-loader</a> in my webpack config, this is not only perfectly
valid, but also will actually apply the CSS to my page.</p>

<p>This is just a single example of the many loaders you can use with webpack.</p>

<h3><a id="user-content-plugins" class="anchor" href="#plugins" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Plugins</h3>

<p>Plugins, like the name suggests, add extra functionality to webpack. One frequently used plugin is
the <code>UglifyJsPlugin</code>, which lets you minify your JavaScript code. We'll cover how to use this later.</p>

<h2><a id="user-content-your-config-file" class="anchor" href="#your-config-file" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Your Config File</h2>

<p>Webpack does not work out of the box so you need to tailor it to your needs. In order to do this you
need to create a file called</p>

<pre><code>webpack.config.js
</code></pre>

<p>as this is the name that webpack recognizes by default. If you choose to use a different name you
would have to use the <code>--config</code> flag to specify the file's name.</p>

<h3><a id="user-content-a-minimal-example" class="anchor" href="#a-minimal-example" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>A Minimal Example</h3>

<p><a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example2">Example 2</a></p>

<p>Say your directory structure looks like this:</p>

<pre><code>MyDirectory
|- dist
|- src
   |- index.js
|- webpack.config.js

</code></pre>

<p>Then a very minimal webpack config you can make is this</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// webpack.config.js</span>
<span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>)

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  entry<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>./src/index<span class="pl-pds">'</span></span>], <span class="pl-c">// file extension after index is optional for .js files</span>
  output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-smi">path</span>.<span class="pl-c1">join</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">'</span>dist<span class="pl-pds">'</span></span>),
    filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bundle.js<span class="pl-pds">'</span></span>
  }
}</pre></div>

<p>Going over the new properties one by one:</p>

<ul>
<li><p><a href="https://webpack.github.io/docs/configuration.html#entry">entry</a> - The entrypoint of your bundle,
which we discussed in the <a href="#bundling">bundling</a> section. It's an array because webpack allows
multiple entry points if you want to generate multiple bundles.</p></li>
<li><p><a href="https://webpack.github.io/docs/configuration.html#output">output</a> - Dictates the form of the output by webpack</p>

<ul>
<li><a href="https://webpack.github.io/docs/configuration.html#output-path">path</a> - where to put the bundle</li>
<li><a href="https://webpack.github.io/docs/configuration.html#output-filename">filename</a> - what to call the bundle</li>
</ul></li>
</ul>

<p>When you run <code>webpack</code>, this will create a file called <code>bundle.js</code> in the dist folder.</p>

<h3><a id="user-content-introducing-plugins" class="anchor" href="#introducing-plugins" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Introducing Plugins</h3>

<p><a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example3">Example 3</a></p>

<p>Imagine that you've used webpack to bundle all your files together, and now you've realized that all
together it's 900KB. This is a problem that can be ameliorated by minifying your bundle. To do this
you need to use a plugin I mentioned earlier called the
<a href="https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin">UglifyJsPlugin</a>.</p>

<p>Moreover you will need to have webpack installed locally to actually be able to use the plugin.</p>

<pre><code>npm install --save-dev webpack
</code></pre>

<p>Now you can require webpack and minify your code.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// webpack.config.js</span>
<span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> webpack <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>webpack<span class="pl-pds">'</span></span>)

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  entry<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>./src/index<span class="pl-pds">'</span></span>],
  output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-smi">path</span>.<span class="pl-c1">join</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">'</span>dist<span class="pl-pds">'</span></span>),
    filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bundle.js<span class="pl-pds">'</span></span>
  },

  plugins<span class="pl-k">:</span> [
    <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-en">UglifyJsPlugin</span>({
      compressor<span class="pl-k">:</span> {
        warnings<span class="pl-k">:</span> <span class="pl-c1">false</span>,
      },
    })
  ]
}</pre></div>

<p>Going over the new properties one by one:</p>

<ul>
<li>plugins - An array that holds your plugins.

<ul>
<li><a href="https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin">webpack.optimize.UglifyJsPlugin</a> - Minify your code, and suppress warning messages.</li>
</ul></li>
</ul>

<p>This time, when you run <code>webpack</code>, now that you have the <code>UglifyJsPlugin</code> this could reduce your
imaginary 900KB file to 200KB through processes such as removing all the whitespace.</p>

<p>You can also add the <a href="https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin">OccurenceOrderPlugin</a></p>

<blockquote>
<p>Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids. This makes ids predictable, reduces to total file size and is recommended.</p>
</blockquote>

<p>To be honest I'm not sure how the underlying mechanisms work, but in the current <a href="https://gist.github.com/sokra/27b24881210b56bbaff7">webpack2 beta it's included by default</a> so I include it as well.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// webpack.config.js</span>
<span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> webpack <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>webpack<span class="pl-pds">'</span></span>)

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  entry<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>./src/index<span class="pl-pds">'</span></span>],
  output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-smi">path</span>.<span class="pl-c1">join</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">'</span>dist<span class="pl-pds">'</span></span>),
    filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bundle.js<span class="pl-pds">'</span></span>
  },
  plugins<span class="pl-k">:</span> [
    <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-en">UglifyJsPlugin</span>({
      compressor<span class="pl-k">:</span> {
        warnings<span class="pl-k">:</span> <span class="pl-c1">false</span>,
      },
    }),
    <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-en">OccurenceOrderPlugin</span>()
  ]
}</pre></div>

<p>So now we have written a config that allows us to minify and bundle our JavaScript. This bundle
could be copied and pasted into another project's directory, and thrown into a <code>&lt;script&gt;</code> tag there.
You can skip to the <a href="#conclusion">conclusion</a> if you only care about the basics of using webpack
with <em>only JavaScript</em>.</p>

<h2><a id="user-content-a-more-complete-example" class="anchor" href="#a-more-complete-example" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>A More Complete Example</h2>

<p>Alternatively, because webpack can do more than just work with JavaScript, you can avoid the
copy-pasting and manage your entire project with webpack.</p>

<p>In the following section, we are going to create a very simple website using webpack. If you wish to
follow along with the example, create a directory with the structure</p>

<pre><code>MyDirectory
|- dist
|- src
   |- index.js
   |- index.html
   |- styles.css
|- package.json
|- webpack.config.js
</code></pre>

<h4><a id="user-content-contents" class="anchor" href="#contents" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Contents</h4>

<ol>
<li><a href="#introducing-loaders">Introducing Loaders</a> - We will add loaders, which allow us to add CSS to our bundle.</li>
<li><a href="#adding-more-plugins">Adding More Plugins</a> - We will add a plugin that'll help us create/use an HTML file.</li>
<li><a href="#the-development-server">The Development Server</a> - We'll split our webpack config into separate <code>development</code> and <code>production</code> files. Then use the webpack-dev-server to view our website and enable HMR.</li>
<li><a href="#start-coding">Start Coding</a> - We will actually write some JavaScript.</li>
</ol>

<h4><a id="user-content-introducing-loaders" class="anchor" href="#introducing-loaders" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Introducing Loaders</h4>

<p><a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example4">Example 4</a></p>

<p>Earlier in the tutorial I mentioned <a href="#loaders">loaders</a>. These will help us require non-js files in
our code. In this case, we will need the style loader and the css loader. First we need to install the loaders:</p>

<pre><code>npm install --save-dev style-loader css-loader
</code></pre>

<p>Now that it's installed we can tweak our config to include the css loader:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// webpack.config.js</span>
<span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> webpack <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>webpack<span class="pl-pds">'</span></span>)

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  entry<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>./src/index<span class="pl-pds">'</span></span>],
  output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-smi">path</span>.<span class="pl-c1">join</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">'</span>dist<span class="pl-pds">'</span></span>),
    filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bundle.js<span class="pl-pds">'</span></span>
  },
  plugins<span class="pl-k">:</span> [
    <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-en">UglifyJsPlugin</span>({
      compressor<span class="pl-k">:</span> {
        warnings<span class="pl-k">:</span> <span class="pl-c1">false</span>,
      },
    }),
    <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-en">OccurenceOrderPlugin</span>()
  ],
  module<span class="pl-k">:</span> {
    loaders<span class="pl-k">:</span> [{
      test<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\.</span>css<span class="pl-k">$</span><span class="pl-pds">/</span></span>,
      loaders<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>style<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>css<span class="pl-pds">'</span></span>]
    }]
  }
}</pre></div>

<p>Going over the new properties one by one:</p>

<ul>
<li><a href="http://webpack.github.io/docs/configuration.html#module">module</a> - Options affecting your files

<ul>
<li><a href="http://webpack.github.io/docs/configuration.html#module-loaders">loaders</a> - An array of loaders that we specify for our application

<ul>
<li>test - A regular expression to match the loader with a file</li>
<li>loaders - Which loaders to use for files that match the test</li>
</ul></li>
</ul></li>
</ul>

<p>This time when you run <code>webpack</code>, if you <code>require</code> a file that ends in <code>.css</code>, then we will apply
the <code>style</code> and <code>css</code> loaders to it, which adds the CSS to the bundle.</p>

<p>If we didn't have the loaders,
then we would get an error like this:</p>

<pre><code>ERROR in ./test.css
Module parse failed: /Users/Developer/workspace/tutorials/webpack/part1/example1/test.css
Line 1: Unexpected token {
You may need an appropriate loader to handle this file type.
</code></pre>

<p><strong>Optional</strong></p>

<p>If you want to use SCSS instead of CSS you would need to run:</p>

<pre><code>npm install --save-dev sass-loader node-sass webpack
</code></pre>

<p>and instead your loader would be written as</p>

<div class="highlight highlight-source-js"><pre>{
  test<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\.</span>scss<span class="pl-k">$</span><span class="pl-pds">/</span></span>,
  loaders<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">"</span>style<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>css<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>sass<span class="pl-pds">"</span></span>]
}</pre></div>

<p>The process is similar for LESS.</p>

<p>An important aspect to recognize is that there is an <em>order</em> to which these loaders need to be specified. In the above example, the <code>sass</code> loader is first applied to your <code>.scss</code> files, then the <code>css</code> loader, and finally the <code>style</code> loader. As you can see, the pattern is that these loaders are applied from right to left.</p>

<h4><a id="user-content-adding-more-plugins" class="anchor" href="#adding-more-plugins" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Adding More Plugins</h4>

<p><a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example5">Example 5</a></p>

<p>Now that we have the infrastructure for styling our website we need an actual page to style.
We'll be doing this through the
<a href="https://github.com/ampedandwired/html-webpack-plugin">html-webpack-plugin</a>,
which lets us generate an HTML page or use an existing one. We'll use an existing one <code>index.html</code>.</p>

<p>First we install the plugin:</p>

<pre><code>npm install --save-dev html-webpack-plugin@2
</code></pre>

<p>Then we can add it to our config</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// webpack.config.js</span>
<span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> webpack <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>webpack<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> HtmlWebpackPlugin <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>html-webpack-plugin<span class="pl-pds">'</span></span>)

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  entry<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>./src/index<span class="pl-pds">'</span></span>],
  output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-smi">path</span>.<span class="pl-c1">join</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">'</span>dist<span class="pl-pds">'</span></span>),
    filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bundle.js<span class="pl-pds">'</span></span>
  },
  plugins<span class="pl-k">:</span> [
    <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-en">UglifyJsPlugin</span>({
      compressor<span class="pl-k">:</span> {
        warnings<span class="pl-k">:</span> <span class="pl-c1">false</span>,
      },
    }),
    <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-en">OccurenceOrderPlugin</span>(),
    <span class="pl-k">new</span> <span class="pl-en">HtmlWebpackPlugin</span>({
      template<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>./src/index.html<span class="pl-pds">'</span></span>
    })
  ],
  module<span class="pl-k">:</span> {
    loaders<span class="pl-k">:</span> [{
      test<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\.</span>css<span class="pl-k">$</span><span class="pl-pds">/</span></span>,
      loaders<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>style<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>css<span class="pl-pds">'</span></span>]
    }]
  }
}</pre></div>

<p>This time, when you run <code>webpack</code>, because we specified an <code>HtmlWebpackPlugin</code> with a template of
<code>./src/index.html</code>, it will generate a file called <code>index.html</code> in our <code>dist</code> folder with the
contents of <code>./src/index.html</code></p>

<p>There's no point in using <code>index.html</code> as a template if it's empty. Now would be a good time to
actually populate it.</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">html</span>&gt;
&lt;<span class="pl-ent">head</span>&gt;
  &lt;<span class="pl-ent">title</span>&gt;Webpack Tutorial&lt;/<span class="pl-ent">title</span>&gt;
&lt;/<span class="pl-ent">head</span>&gt;
&lt;<span class="pl-ent">body</span>&gt;
  &lt;<span class="pl-ent">h1</span>&gt;Very Website&lt;/<span class="pl-ent">h1</span>&gt;
  &lt;<span class="pl-ent">section</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>color<span class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">section</span>&gt;
  &lt;<span class="pl-ent">button</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>button<span class="pl-pds">"</span></span>&gt;Such Button&lt;/<span class="pl-ent">button</span>&gt;
&lt;/<span class="pl-ent">body</span>&gt;
&lt;/<span class="pl-ent">html</span>&gt;</pre></div>

<p>Note that we aren't putting a <code>&lt;script&gt;</code> tag into our HTML for <code>bundle.js</code>. The plugin will actually
automatically do that for you. If you do put in the script tag, you'll end up loading your same code twice.</p>

<p>and while we're at it let's add some basic styling in <code>styles.css</code></p>

<div class="highlight highlight-source-css"><pre><span class="pl-ent">h1</span> {
  <span class="pl-c1"><span class="pl-c1">color</span></span>: <span class="pl-c1">rgb</span>(<span class="pl-c1">114, 191, 190</span>);
  <span class="pl-c1"><span class="pl-c1">text-align</span></span>: <span class="pl-c1">center</span>;
}

<span class="pl-e">#color</span> {
  <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">300<span class="pl-k">px</span></span>;
  <span class="pl-c1"><span class="pl-c1">height</span></span>: <span class="pl-c1">300<span class="pl-k">px</span></span>;
  <span class="pl-c1"><span class="pl-c1">margin</span></span>: <span class="pl-c1">0</span> <span class="pl-c1">auto</span>;
}

<span class="pl-ent">button</span> {
  <span class="pl-c1"><span class="pl-c1">cursor</span></span>: <span class="pl-c1">pointer</span>;
  <span class="pl-c1"><span class="pl-c1">display</span></span>: <span class="pl-c1">block</span>;
  <span class="pl-c1"><span class="pl-c1">width</span></span>: <span class="pl-c1">100<span class="pl-k">px</span></span>;
  <span class="pl-c1"><span class="pl-c1">outline</span></span>: <span class="pl-c1">0</span>;
  <span class="pl-c1"><span class="pl-c1">border</span></span>: <span class="pl-c1">0</span>;
  <span class="pl-c1"><span class="pl-c1">margin</span></span>: <span class="pl-c1">20<span class="pl-k">px</span></span> <span class="pl-c1">auto</span>;
}</pre></div>

<h4><a id="user-content-the-development-server" class="anchor" href="#the-development-server" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>The Development Server</h4>

<p><a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example6">Example 6</a></p>

<p>Now we want to actually see our website in the browser, which requires a web server to serve our
code. Conveniently, webpack comes with the <code>webpack-dev-server</code>, which you need to install both
locally and globally</p>

<pre><code>npm install -g webpack-dev-server
npm install --save-dev webpack-dev-server
</code></pre>

<p>The dev server is an extremely useful resource for seeing what your website looks like in the browser, and more rapid development. By default you can visit it at <code>http://localhost:8080</code>. Unfortunately, features such as hot reloading don't work out of the box, and require some more configuration.</p>

<p>This is a good point to split up our webpack config into one meant for development and one meant for
production. Since we're keeping it simple in this tutorial, it won't be a huge difference, but it's
an introduction to the extreme configurability of webpack. We'll call them <code>webpack.config.dev.js</code>
and <code>webpack.config.prod.js</code>.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// webpack.config.dev.js</span>
<span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> webpack <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>webpack<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> HtmlWebpackPlugin <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>html-webpack-plugin<span class="pl-pds">'</span></span>)

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  devtool<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>cheap-eval-source-map<span class="pl-pds">'</span></span>,
  entry<span class="pl-k">:</span> [
    <span class="pl-s"><span class="pl-pds">'</span>webpack-dev-server/client?http://localhost:8080<span class="pl-pds">'</span></span>,
    <span class="pl-s"><span class="pl-pds">'</span>webpack/hot/dev-server<span class="pl-pds">'</span></span>,
    <span class="pl-s"><span class="pl-pds">'</span>./src/index<span class="pl-pds">'</span></span>
  ],
  output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-smi">path</span>.<span class="pl-c1">join</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">'</span>dist<span class="pl-pds">'</span></span>),
    filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bundle.js<span class="pl-pds">'</span></span>
  },
  plugins<span class="pl-k">:</span> [
    <span class="pl-k">new</span> <span class="pl-en">webpack.HotModuleReplacementPlugin</span>(),
    <span class="pl-k">new</span> <span class="pl-en">HtmlWebpackPlugin</span>({
      template<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>./src/index.html<span class="pl-pds">'</span></span>
    })
  ],
  module<span class="pl-k">:</span> {
    loaders<span class="pl-k">:</span> [{
      test<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\.</span>css<span class="pl-k">$</span><span class="pl-pds">/</span></span>,
      loaders<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>style<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>css<span class="pl-pds">'</span></span>]
    }]
  },
  devServer<span class="pl-k">:</span> {
    contentBase<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>./dist<span class="pl-pds">'</span></span>,
    hot<span class="pl-k">:</span> <span class="pl-c1">true</span>
  }
}</pre></div>

<p><strong>Changes</strong></p>

<ol>
<li><p>The dev config omits the optimizations as they are unnecessary overhead when you are constantly
rebuilding. So no <code>webpack.optimize</code> plugins.</p></li>
<li><p>The dev config has the necessary configuration for the dev server, which you can read more about
<a href="https://webpack.github.io/docs/webpack-dev-server.html">here</a>.</p></li>
</ol>

<p>Summarized:</p>

<ul>
<li>entry: The two new entry points connect the server to the browser to allow for HMR.</li>
<li>devServer

<ul>
<li>contentBase: Where to serve files from</li>
<li>hot: enable HMR</li>
</ul></li>
</ul>

<p>The prod config doesn't change much</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// webpack.config.prod.js</span>
<span class="pl-k">var</span> path <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>path<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> webpack <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>webpack<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> HtmlWebpackPlugin <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>html-webpack-plugin<span class="pl-pds">'</span></span>)

<span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> {
  devtool<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>source-map<span class="pl-pds">'</span></span>,
  entry<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>./src/index<span class="pl-pds">'</span></span>],
  output<span class="pl-k">:</span> {
    path<span class="pl-k">:</span> <span class="pl-smi">path</span>.<span class="pl-c1">join</span>(<span class="pl-c1">__dirname</span>, <span class="pl-s"><span class="pl-pds">'</span>dist<span class="pl-pds">'</span></span>),
    filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>bundle.js<span class="pl-pds">'</span></span>
  },
  plugins<span class="pl-k">:</span> [
    <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-en">UglifyJsPlugin</span>({
      compressor<span class="pl-k">:</span> {
        warnings<span class="pl-k">:</span> <span class="pl-c1">false</span>,
      },
    }),
    <span class="pl-k">new</span> <span class="pl-en">webpack.optimize</span>.<span class="pl-en">OccurenceOrderPlugin</span>(),
    <span class="pl-k">new</span> <span class="pl-en">HtmlWebpackPlugin</span>({
      template<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>./src/index.html<span class="pl-pds">'</span></span>
    })
  ],
  module<span class="pl-k">:</span> {
    loaders<span class="pl-k">:</span> [{
      test<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\.</span>css<span class="pl-k">$</span><span class="pl-pds">/</span></span>,
      loaders<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">'</span>style<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>css<span class="pl-pds">'</span></span>]
    }]
  }
}</pre></div>

<p>I've also added a brand new property to both the dev config and the prod config:</p>

<ul>
<li><a href="https://webpack.github.io/docs/configuration.html#devtool">devtool</a> - This is a debugging aid.
Basically, when you get a error, it'll help you see where you made the mistake something like the
chrome developer console. As for the difference between <code>source-map</code> and <code>cheap-eval-source-map</code>
it's a little hard to glean from the docs. What I can say definitively is that <code>source-map</code> is meant
for production and has a lot of overhead, and that <code>cheap-eval-source-map</code> has less overhead and is
meant for developing only.</li>
</ul>

<p>To run the dev server we have to run</p>

<pre><code>webpack-dev-server --config webpack.config.dev.js
</code></pre>

<p>and to build the production code we have to run</p>

<pre><code>webpack --config webpack.config.prod.js
</code></pre>

<p>To make our lives a little easier we are now going to use <code>package.json</code> as a simple task runner so
that we don't need to keep typing out either command.</p>

<p>We add the <code>scripts</code> property to the config</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// package.json</span>
{
  <span class="pl-c">//...</span>
  <span class="pl-s"><span class="pl-pds">"</span>scripts<span class="pl-pds">"</span></span><span class="pl-k">:</span> {
    <span class="pl-s"><span class="pl-pds">"</span>build<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>webpack --config webpack.config.prod.js<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>dev<span class="pl-pds">"</span></span>  <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>webpack-dev-server --config webpack.config.dev.js<span class="pl-pds">"</span></span>
  }
  <span class="pl-c">//...</span>
}</pre></div>

<p>We can run these commands with</p>

<pre><code>npm run build
npm run dev
</code></pre>

<p>You can now view your beautiful website by running <code>npm run dev</code>, and navigating to
<code>http://localhost:8080</code>.</p>

<p><strong>Side Note:</strong> while I was testing this portion I realized that the server would not hot reload
when I modified the <code>index.html</code> file. The solution to this problem is over at
<a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/html-reload">html-reload</a>. It's useful
information that covers some more configuration options of webpack, which I recommend looking at,
but I left it separate because I feel like it lengthens the tutorial for too trivial of a reason.</p>

<h4><a id="user-content-start-coding" class="anchor" href="#start-coding" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Start Coding</h4>

<p><a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/example7">Example 7</a></p>

<p>The reason most people seem to be flustered by webpack is the fact that they need to go through all
of this to get to the point where they finally write JavaScript; however, now we have arrived at the
climax of our tutorial.</p>

<p>Just in case you haven't already: do <code>npm run dev</code>, and navigate to <code>http://localhost:8080</code>. Setting
up that dev server with hot reloading wasn't for show. Every single time you save while editing
any part of your project, the browser will reload to show your changes.</p>

<p>We are also going to require a npm package just to demonstrate how you can use them in your
frontend now.</p>

<pre><code>npm install --save pleasejs
</code></pre>

<p>PleaseJS is a random color generator, which we're going to hook up to our button to change the color
of our div.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-c">// index.js</span>

<span class="pl-c">// Accept hot module reloading</span>
<span class="pl-k">if</span> (<span class="pl-c1">module</span>.<span class="pl-smi">hot</span>) {
  <span class="pl-c1">module</span>.<span class="pl-smi">hot</span>.<span class="pl-c1">accept</span>()
}

<span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>./styles.css<span class="pl-pds">'</span></span>) <span class="pl-c">// The page is now styled</span>
<span class="pl-k">var</span> Please <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">'</span>pleasejs<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> div <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>color<span class="pl-pds">'</span></span>)
<span class="pl-k">var</span> button <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span class="pl-s"><span class="pl-pds">'</span>button<span class="pl-pds">'</span></span>)

<span class="pl-k">function</span> <span class="pl-en">changeColor</span>() {
  <span class="pl-smi">div</span>.<span class="pl-c1">style</span>.<span class="pl-c1">backgroundColor</span> <span class="pl-k">=</span> <span class="pl-smi">Please</span>.<span class="pl-en">make_color</span>()
}

<span class="pl-smi">button</span>.<span class="pl-en">addEventListener</span>(<span class="pl-s"><span class="pl-pds">'</span>click<span class="pl-pds">'</span></span>, changeColor)</pre></div>

<p>Interestingly, <a href="https://webpack.github.io/docs/hot-module-replacement-with-webpack.html#what-is-needed-to-use-it">in order for Hot Module Replacement to work</a>
You need to include the code:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">if</span> (<span class="pl-c1">module</span>.<span class="pl-smi">hot</span>) {
  <span class="pl-c1">module</span>.<span class="pl-smi">hot</span>.<span class="pl-c1">accept</span>()
}</pre></div>

<p>in a module or a parent of that module.</p>

<p>and we're done!</p>

<p><strong>Side Note:</strong> You might have noticed a delay before your css was applied, or maybe you hate the
fact that your css is in your javascript file. I've put aside an example,
<a href="https://github.com/AriaFallah/WebpackTutorial/tree/master/part1/css-extract">css-extract</a>,
that describes how to put your CSS in a different file.</p>

<h2><a id="user-content-conclusion" class="anchor" href="#conclusion" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Conclusion</h2>

<p>I hope this is helpful.</p>

<p>Webpack first and foremost is a module bundler. It's an extremely modular and useful tool,
which, in fact, is not chained to ES6 and React.</p>

<p>Now given that</p>

<ul>
<li>Part 2 will address using Webpack to transpile ES6 to ES5 with Babel</li>
<li>Part 3 will address using Webpack with React + Babel</li>
</ul>

<p>Since those are the most common use cases.</p>

<h2><a id="user-content-closing-thoughts" class="anchor" href="#closing-thoughts" aria-hidden="true"><svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z"></path></svg></a>Closing Thoughts</h2>

<p>Congratulations! You made a button that changes the color of a div! Isn't webpack great?</p>

<p>Yes it is; however, if all you're doing is making a button that changes the color of a div, it's
probably not worth it writing a config like this. If you do, you might get...fatigued <img class="emoji" title=":anguished:" alt=":anguished:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f627.png" height="20" width="20" align="absmiddle"></p>
</article>
  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="hidden">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z"></path></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.08612s from github-fe133-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-HDl3MSsPz+s7+zUe7KFgt+tfJxw86k7UF92fMc+D0d0=" src="https://assets-cdn.github.com/assets/frameworks-1c3977312b0fcfeb3bfb351eeca160b7eb5f271c3cea4ed417dd9f31cf83d1dd.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-+Dri8NSD3dyPGJSzzCcJ/x20hRHdyNBU7WOcUsgNVMk=" src="https://assets-cdn.github.com/assets/github-f83ae2f0d483dddc8f1894b3cc2709ff1db48511ddc8d054ed639c52c80d54c9.js"></script>
      
      
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M15.72 12.5l-6.85-11.98C8.69 0.21 8.36 0.02 8 0.02s-0.69 0.19-0.87 0.5l-6.85 11.98c-0.18 0.31-0.18 0.69 0 1C0.47 13.81 0.8 14 1.15 14h13.7c0.36 0 0.69-0.19 0.86-0.5S15.89 12.81 15.72 12.5zM9 12H7V10h2V12zM9 9H7V5h2V9z"></path></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path d="M7.48 8l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75-1.48-1.48 3.75-3.75L0.77 4.25l1.48-1.48 3.75 3.75 3.75-3.75 1.48 1.48-3.75 3.75z"></path></svg>
    </button>
  </div>
</div>

  </body>
</html>

