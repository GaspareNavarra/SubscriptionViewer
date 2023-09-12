<template>
    <div class="row navbar no-padding" style="width: 100.6%;">
        <header id="NavBar" class="align">
            <nav-element></nav-element>
            
            <!-- <div id="hamburgerMenu" class="nav-container">
                <input class="checkbox" type="checkbox" name="" id="" />
                <div class="hamburger-lines">
                    <span class="line line1"></span>
                    <span class="line line2"></span>
                    <span class="line line3"></span>
                </div>
                <div class="menu-items">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">blogs</a></li>
                    <li><a href="#">portfolio</a></li>
                    <li><a href="#">contact</a></li>
                </div>
            </div> -->
        </header>
    </div>
</template>

<script>
import NavElement from './NavElement.vue';

export default {
    components: { NavElement }
}
</script>