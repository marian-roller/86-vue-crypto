<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">
                Vue
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                            <router-link to="/" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <div class="nav-link">name</div> 
                    </li>
                    <li class="nav-item">
                        <router-link to="/signin" class="nav-link">Sign in</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Sign out</a>
                    </li>
                </ul>

                
                <ul class="navbar-nav ml-auto">
                
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                
                    <li class="nav-item">
                        <a class="nav-link" href="#">Register</a>
                    </li>
                    
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Username
                        </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </nav>
</div>

    
</template>