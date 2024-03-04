<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="forgot1">
            <div class="alert"></div>
            <header>
              <div v-if="showAlert" class="alert">{{ alertMessage }}</div>
              <div v-else class="d-none"></div>
              <h1 style="text-align: start">Forgot Your password?</h1>
            </header>
            <h5 style="margin: 23px 0">
              Enter your email address, and we'll send you a link to get back
              into your account.
            </h5>

            <form @submit.prevent="handleSubmit">
              <div class="forgot2">
                <input type="email" v-model="email" required />
                <span></span>
                <label>Enter your registered email address</label>
              </div>

              <div class="forgot3">
                <button type="button" v-on:click="sendMail()">SEND</button>
                <!-- <div class="forgot4">
                  <span>Don't receive email?</span>
                  <div class="forgot5">
                    <span type="button" v-on:click="sendMail">Resend</span>
                  </div>
                </div> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ForgotPassword",
  data() {
    return {
      email: "",
      alertMessage: "",
      showAlert: false,
    };
  },

  methods: {
    sendMail() {
      axios
        .post("forgotpasswordotp", { email: this.email })
        .then((response) => {
          console.log(response.data.data);
          localStorage.setItem("email", response.data.data.email);
          localStorage.setItem("otp", response.data.data.otp);
          if (response.data.status_code == 200) {
            this.$router.push("/OTPVerify");
          } else {
            this.showAlert = true;
            // this.alertMessage = error.response.data.message;
            this.alertMessage = response.data.message;
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            // Handle validation errors or other issues with the request
            if (error.response.data && error.response.data.errors) {
              this.alertMessage = error.response.data.errors.join(", ");
            } else {
              this.alertMessage =
                "Invalid email or password. Please try again.";
            }

            this.showAlert = true;
            setTimeout(() => {
              this.showAlert = false;
            }, 2000);
          } else {
            // Handle other error cases
            this.alertMessage = "An error occurred while logging in.";
            this.showAlert = true;
          }
        });
    },
  },
};
</script>

<style scoped>
.col-lg-12 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-fluid {
  background: url("./auth-assets/wall.jpeg") no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.sign {
  text-align: center;
  margin-bottom: 1rem;
}

.sign img {
  max-width: 100%;
}

.sign h5 {
  width: 80%;
  margin: 0 auto;
  font-size: 1rem;
  color: gray;
  border-top: 1px solid;
  padding-top: 1%;
}

.forgot1 {
  border: 1px solid whitesmoke;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 1rem;
  text-align: center;
  box-shadow: 0px 0px 10px -4px #fbfbfb;
}

.forgot1 header {
  color: red;
  text-align: center;
  border-radius: 10px;
  margin: 2% 0;
  font-size: 1rem;
}

.forgot1 h5 {
  margin: 1% 0;
  width: 100%;
  font-size: 0.9rem;
}

.forgot2 {
  position: relative;
  margin: 0 0;
  font-weight: 500;
}

.forgot2 input {
  width: 100%;
  padding: 0 13px;
  font-size: 1rem;
  border-bottom: 2px solid black;
  background: none;
  outline: none;
  padding-top: 4.5rem;
  padding-bottom: 0;
  transition: border-color 0.1s;
}

.forgot2 input:focus {
  border-color: transparent;
  border: none;
}

.forgot2 input:valid {
  border-color: red;
}

.forgot2 label {
  position: absolute;
  top: 50%;
  left: 7%;
  color: #adadad;
  transform: translate(-10%);
  font-size: 1rem;
  pointer-events: none;
  transition: 0.5s;
}

.forgot2 span::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0%;
  height: 1.6px;
  background: red;
  transition: 0.5s;
}

.forgot2 input:focus ~ label,
.forgot2 input:valid ~ label {
  top: 0%;
  color: #eb0e19;
}

.forgot2 input:focus ~ span::before,
.forgot2 input:valid ~ span::before {
  width: 100%;
}

.forgot3 button {
  margin: 25px 0;
  width: 100%;
  line-height: 1.5;
  color: white;
  background: red;
  border: none;
  outline: none;
  font-size: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
}

.forgot4 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}

.forgot5 span {
  background: none;
  border: none;
  outline: none;
  color: red;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.08rem;
}

.alert {
  text-align: center;
  --bs-alert-bg: transparent;
  --bs-alert-padding-x: 0;
  --bs-alert-padding-y: 0;
  --bs-alert-margin-bottom: 0;
  --bs-alert-color: inherit;
  --bs-alert-border-color: transparent;
  padding: 0;
  margin-bottom: 0;
  color: var(--bs-alert-color);
  font-size: 1.3rem;
}

@media (max-width: 767px) {
  .container {
    padding: 0 10px;
  }
}
</style>
