<template>
  <LandingNavBar />

  <div class="container my-28 p-2">
    <div class="flex justify-center">
      <div class="flex flex-col p-4 rounded-md shadow bg-white">
        <div class="text-red-700 text-center">{{ errorMessage }}</div>

        <div>
          <h2 class="text-red-700 text-3xl font-semibold">Sign In</h2>
        </div>
        <span class="text-md"
          >Feast on Flavor, Feast on Savings with RedPrix!</span
        >

        <form>
          <div class="my-2 flex flex-col">
            <label>Email Address</label>
            <input
              type="email"
              v-model="email"
              required
              class="p-2 focus:outline-none focus:border-blue-600 focus:ring-2 rounded-md border border-blue-600 ring-1 outline-none"
            />
          </div>

          <!-- password filed here -->
          <div class="flex flex-col my-2 w-full">
            <label>Set Password</label>
            <div class="flex w-full items-center justify-center">
              <input
                v-if="showPassword"
                type="text"
                id="password"
                v-model="password"
                class="p-2 w-full focus:outline-none focus:border-blue-600 focus:ring-2 rounded-l-md border border-blue-600 ring-1 outline-none"
              />
              <input
                v-else
                type="password"
                id="password"
                v-model="password"
                @keyup.enter="signIn"
                required
                class="p-2 w-full focus:outline-none focus:border-blue-600 focus:ring-2 rounded-l-md border border-blue-600 ring-1 outline-none"
              />

              <i
                class="fas text-2xl cursor-pointer p-2 focus:outline-none focus:border-blue-600 focus:ring-2 rounded-r-md border border-blue-600 ring-1 outline-none"
                @click="toggleShow"
                :class="{
                  'fa-eye': showPassword,
                  'fa-eye-slash': !showPassword,
                }"
              ></i>
            </div>
          </div>

          <!-- check box here -->
          <div class="flex w-full justify-between my-4">
            <div class="form-check">
              <input
                type="checkbox"
                class="p-2 focus:outline-none focus:border-blue-600 focus:ring-2 rounded-md"
              />
              <label class="cursor-pointer">Remember me</label>
            </div>

            <div class="">
              <router-link
                style="text-decoration: none; color: #000"
                to="ForgetPassword"
              >
                <span>Forgot Password</span>
              </router-link>
            </div>
          </div>

          <!-- signin button -->
          <div class="my-2 w-full">
            <button
              class="bg-red-700 p-2 text-white text-2xl font-semibold rounded-md w-full hover:bg-red-600"
              type="button"
              v-on:click="signIn()"
              :disabled="loading"
            >
              <span v-if="loading">
                <i class="fas fa-spinner fa-spin"></i> Signing In...
              </span>
              <span v-else> Sign In </span>
            </button>
          </div>

          <div class="flex items-center justify-center">
            <span class="text-[#000]">New to Redprix?</span>
            <router-link to="/Signup" style="text-decoration: none">
              <span role="link">Register Here</span>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <SignupSecond />
  </div>
</template>

<script>
// import axios from "axios";
import SignupSecond from "../landingPage/Signup-Second.vue";
import LandingNavBar from "../landingPage/LandingNavBar.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      Authorization: "",
      showPassword: false,
      errorMessage: "",
      loading: false,
    };
  },

  mounted() {},

  computed: {
    ...mapGetters(["getUserData", "getErrorMsg"]),
  },

  methods: {
    ...mapActions(["userSignin"]),

    signIn() {
      if (!this.email || !this.password) {
        this.errorMessage = "Please enter both email and password.";

        setTimeout(() => {
          this.errorMessage = "";
        }, 3000);
        return;
      }

      const email = this.email;
      const password = this.password;

      this.loading = true;

      this.userSignin({ email, password })
        .then(() => {
          // console.log("response of user data = ", response);

          const response = this.getUserData;

          // Navigate to home page if user_type matches
          if (
            response.user_type == 1 ||
            response.user_type == 2 ||
            response.user_type == 3
          ) {
            this.$router.push("/home");
          }

          this.loading = false;
        })
        .catch((error) => {
          this.errorMessage = this.getErrorMsg;
          setTimeout(() => {
            this.errorMessage = "";
          }, 3000);
          this.loading = false;
        });
    },

    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  components: { SignupSecond, LandingNavBar },
};
</script>

<style scoped></style>
