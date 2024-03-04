<template>
  <LandingNavBar />

  <div
    class="container-xxl d-flex justify-content-center align-items-center mt-5"
  >
    <div
      class="d-flex justify-content-center align-items-center bg-body flex-column shadow p-3 w-50 rounded-4"
    >
      <div class="d-flex align-items-center justify-content-center flex-column">
        <div v-if="showAlert" class="alert">{{ alertMessage }}</div>

        <div class="d-flex justify-content-start w-100">
          <h1 class="text-danger fs-1 fw-semibold">Create Account</h1>
        </div>

        <div class="d-flex justify-content-center align-items-center w-100">
          <h5 class="text-center fw-semibold fs-6">
            Join RedPrix today and elevate your foodie journey. Sign up now and
            start savoring the savings!
          </h5>
        </div>
      </div>

      <div class="container">
        <!-- email and name -->
        <div class="row">
          <div class="col-lg-12 my-2">
            <label>Full Name</label>
            <input
              type="text"
              v-model="full_name"
              required
              class="form-control"
            />
          </div>

          <div class="col-lg-12 my-2">
            <label>Enter Email Id</label>
            <input type="email" v-model="email" required class="form-control" />
          </div>
        </div>

        <!-- country state city pincode -->
        <div class="row">
          <div class="col-lg-3 my-2">
            <select
              class="form-select"
              v-model="country_id"
              @change="getState()"
            >
              <option selected>Select Country</option>
              <option
                v-for="country in list"
                :value="country.id"
                v-bind:key="country.id"
              >
                {{ country.name }}
              </option>
            </select>
          </div>

          <div class="col-lg-3 my-2">
            <select
              class="form-select"
              aria-label="Default select example"
              @change="getCity()"
              v-model="state_id"
            >
              <option selected>Select State</option>
              <option
                v-for="item in state"
                :value="item.id"
                v-bind:key="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="col-lg-3 my-2">
            <select class="form-select" v-model="city_id" @change="getState()">
              <option selected>Select City</option>
              <option
                v-for="item in city"
                :value="item.id"
                v-bind:key="item.id"
              >
                {{ item.name }}
              </option>
            </select>
          </div>

          <div class="col-lg-3 my-2">
            <input type="text" class="form-control" placeholder="pin-code" />
          </div>
        </div>

        <!-- set password and confirm password -->
        <div class="row">
          <div class="col-lg-12 my-2">
            <label>Set Password</label>
            <div class="input-group">
              <input
                v-model="set_password"
                class="form-control"
                :type="showSetPassword ? 'text' : 'password'"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text"
                  @click="showSetPassword = !showSetPassword"
                >
                  <i
                    class="fas p-1"
                    :class="showSetPassword ? 'fa-eye-slash' : 'fa-eye'"
                  ></i>
                </span>
              </div>
            </div>
          </div>

          <div class="col-lg-12 my-2">
            <label>Confirm Password</label>
            <div class="input-group">
              <input
                v-model="confirm_password"
                class="form-control"
                :type="showConfirmPassword ? 'text' : 'password'"
              />
              <div class="input-group-append">
                <span
                  class="input-group-text"
                  @click="showConfirmPassword = !showConfirmPassword"
                >
                  <i
                    class="fas p-1"
                    :class="showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'"
                  ></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-start align-items-center my-2">
          <input type="checkbox" v-model="agreed" class="" />
          <label> Please Confirm that You agree to our policy & terms </label>
        </div>

        <div class="w-100">
          <button
            v-on:click="createAccount()"
            type="button"
            @click="navigate"
            role="link"
            class="btn btn-danger w-100"
          >
            CREATE ACCOUNT
          </button>
        </div>

        <div
          class="d-flex justify-content-center align-items-center fs-6 fw-semibold mt-2"
        >
          <span>Already on Redprix?</span>
          <router-link to="/home" custom v-slot="{ navigate }">
            <span @click="navigate" role="link" class="text-danger">
              Sign In</span
            >
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LandingNavBar from "../landingPage/LandingNavBar.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      full_name: "",
      email: "",

      set_password: "",
      confirm_password: "",
      showSetPassword: false,
      showConfirmPassword: false,

      email_otp: "",

      country_id: "",
      state_id: "",
      city_id: "",
      list: [],
      state: [],
      city: [],
      agreed: false,
      alertMessage: "",
      showAlert: false,
    };
  },

  methods: {
    createAccount() {
      if (!this.agreed) {
        // If not agreed, show an error message or handle as needed
        this.showAlert = true;
        this.alertMessage = "You must agree to the terms.";
        return; // Exit the method
      }
      axios
        .post("customers/customers", {
          name: this.full_name,
          email: this.email,
          password: this.set_password,
          confirm_password: this.confirm_password,
          country_id: this.country_id,
          state_id: this.state_id,
          city_id: this.city_id,
        })
        .then((response) => {
          localStorage.setItem("email", this.email);
          localStorage.setItem("OTP", response.data.data.email_otp);
          // Redirect to the verification page
          this.$router.push("/OTPVerify");
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
          this.showAlert = true;
          this.alertMessage = error.response.data.message;
        });
    },

    getData() {
      axios.get("countries?is_light=true").then((result) => {
        this.list = result.data.data;
        if (this.country_id) {
          this.getState();
        }
      });
    },
    getState() {
      axios
        .get("states?is_light=1" + this.country_id, {
          params: { country_id: this.country_id },
        })
        .then((result) => {
          this.state = result.data.data;
          if (this.state_id) {
            this.getCity();
          }
        });
    },
    getCity() {
      axios
        .get("cities_of_state?is_light=1" + this.state_id, {
          params: { state_id: this.state_id },
        })
        .then((result) => {
          this.city = result.data.data;
          console.log(this.city);
        });
    },
  },

  mounted() {
    this.getData();
  },
  components: { LandingNavBar },
};
</script>
