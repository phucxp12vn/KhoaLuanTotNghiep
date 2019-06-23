<template>
  <v-navigation-drawer
    id="appDrawer"
    :mini-variant.sync="mini"
    :dark="$vuetify.dark"
    v-model="drawer"
    fixed
    app
    width="260"
  >
    <v-toolbar color="#337ab7" dark height="50">
      <img
        id="logo"
        src="~assets/images/logo.png"
        height="40"
        alt="Mirae Asset Finance Vietnam"
      />
    </v-toolbar>
    <vue-perfect-scrollbar
      :settings="scrollSettings"
      class="drawer-menu--scroll my_style"
    >
      <v-list dense expand>
        <template v-for="(item, i) in readMenu">
          <!--group with subitems-->
          <v-list-group
            v-if="item.items"
            :value="computeGroupActive(item)"
            :class="[$route.meta.group == item.group ? 'active' : '']"
            :key="item.name"
            :group="item.group"
            :prepend-icon="item.icon"
            no-action="no-action"
          >
            <v-list-tile slot="activator" ripple="ripple">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-subheader v-else-if="item.header" :key="i">{{
            item.header
          }}</v-subheader>
          <v-divider v-else-if="item.divider" :key="i" />
          <!--top-level link-->
          <v-list-tile
            v-else
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            :class="[
              'simple-list-item',
              $route.name == item.name ? 'active' : ''
            ]"
            :disabled="item.disabled"
            :target="item.target"
            :key="item.name"
            ripple="ripple"
            rel="noopener"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <!-- <v-circle class="white--text pa-0 chip--x-small" v-if="item.badge" :color="item.color || 'primary'" disabled="disabled">{{ item.badge }}</v-circle> -->
            <v-list-tile-action v-if="item.subAction">
              <v-icon class="success--text">{{ item.subAction }}</v-icon>
            </v-list-tile-action>
            <!-- <v-circle class="caption blue lighten-2 white--text mx-0" v-else-if="item.chip" label="label" small="small">{{ item.chip }}</v-circle> -->
          </v-list-tile>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import _ from 'lodash';
import { mapState, mapActions } from 'vuex';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';

export default {
  name: 'app-drawer',

  components: {
    VuePerfectScrollbar
  },

  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    mini: false,
    scrollSettings: {
      maxScrollbarLength: 160
    }
  }),

  computed: {
    ...mapState('login', ['menus']),
    ...mapState('global', ['drawerToggled']),

    sideToolbarColor() {
      return this.$vuetify.options.extra.sideNav;
    },

    drawer: {
      get() {
        return this.drawerToggled;
      },

      set(val) {
        this.toggleDrawer(val);
      }
    },

  },

  methods: {
    ...mapActions('global', ['toggleDrawer']),

    genChildTarget(item, subItem) {
      if (subItem.href) return;
      if (subItem.component) {
        return {
          name: subItem.component
        };
      }
      return { name: `${item.group}/${subItem.name}` };
    },

    computeGroupActive(item) {
      if (item.group == this.$route.meta.group) {
        return true;
      }
      return false;
    },

    readMenu(menu) {
      let safeMenu = _.cloneDeep(menu);
      // Main menu
      if (_.has(safeMenu, 'name')) {
        if (safeMenu.name == 'Dashboard') {
          return [safeMenu];
        }

        if (!_.has(safeMenu, 'items') || safeMenu.items.length == 0) {
          return [];
        }
        let subMenu = [];
        _.forEach(safeMenu.items, item => {
          if (
            _.has(item, 'component')
          ) {
            subMenu.push(item);
          }
        });
        if (subMenu.length > 0) {
          safeMenu.items = subMenu;
          return [safeMenu];
        }
      }
      return [];
    }
  }
};
</script>

<style lang="stylus">
// @import '../../node_modules/vuetify/src/stylus/settings/_elevations.styl';
#appDrawer {
  overflow: hidden;
  background-color: #222d32;

  .drawer-menu--scroll {
    height: calc(100vh - 48px);
    overflow-x: hidden;
    overflow-y: auto;
  }
}

#logo {
    filter: brightness(0) invert(1);
    -webkit-filter: brightness(0) invert(1);
    margin: 0 auto;
}
</style>
