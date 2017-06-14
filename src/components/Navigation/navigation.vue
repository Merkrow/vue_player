<template>
  <div class='navigation'>
    <ul class='nav-list'>
      <li v-for='item in navItems' class='nav-item'>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script src="./navigation.js"></script>
<style src="./navigation.css" scoped></style>
