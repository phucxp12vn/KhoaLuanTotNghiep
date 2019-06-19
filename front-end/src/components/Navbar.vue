<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-title>Meow Meow</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-flex xs12 sm6>
        <v-text-field label="Tìm kiếm" single-line outline append-outer-icon="search" clearable></v-text-field>
      </v-flex>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat color="grey">
          <span>Giỏ hàng</span>
          <v-icon>local_grocery_store</v-icon>
        </v-btn>
        <v-btn flat color="grey">
          <span>Kiểm tra đơn hàng</span>
          <v-icon>description</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template> 