<template>
  <div class="container-fluid">
    <div class="form">
      <div class="otp1">
        <header>
          <h1>OTP Verification</h1>
        </header>
        <h5>Enter the verification code received in the mail I'd</h5>

        <div class="otp2">
          <!-- <input id="partitioned" type="number" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '1');" maxlength="1" v-model="email_otp" autocomplete="off"  /> -->

          <input
            type="text"
            id="o1"
            class="text1"
            placeholder
            maxlength="1"
            v-model="otpDigit1"
            v-on:click="focus()"
            required
          />
          <input
            type="text"
            id="o2"
            class="text2"
            placeholder
            maxlength="1"
            v-model="otpDigit2"
            required
          />
          <input
            type="text"
            id="o3"
            class="text3"
            placeholder
            maxlength="1"
            v-model="otpDigit3"
            required
          />
          <input
            type="text"
            id="o4"
            class="text4"
            placeholder
            maxlength="1"
            v-model="otpDigit4"
            required
          />
          <input
            type="text"
            id="o5"
            class="text5"
            placeholder
            maxlength="1"
            v-model="otpDigit5"
            required
          />
          <input
            type="text"
            id="o6"
            class="text5"
            placeholder
            maxlength="1"
            v-model="otpDigit6"
            required
          />
        </div>

        <div class="otp3">
          <button @click="otpVerify" role="link" type="confirm">Confirm</button>
        </div>

        <div class="otp4">
          <span>Don't receive OTP?</span>
          <div class="otp5">
            <span @click="resend">Resend</span>
          </div>
        </div>
        <p
          v-if="verificationStatus"
          style="text-align: center; margin: 0; color: red"
        >
          {{ verificationStatus }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import { mapGetters } from "vuex";
export default {
  name: "otpVerfiy",

  data() {
    return {
      otpDigit1: "",
      otpDigit2: "",
      otpDigit3: "",
      otpDigit4: "",
      otpDigit5: "",
      otpDigit6: "",
      email: "",
      // userOTP: "",
      // verificationStatus: "",
    };
  },

  methods: {
    focus() {
      let otp2 = document.getElementsByClassName("otp2")[0];
      otp2.onkeyup = function (e) {
        let target = e.srcElement;
        let maxLength = parseInt(target.attributes["maxlength"].value, 10);
        let myLength = target.value.length;
        if (myLength >= maxLength) {
          let next = target;
          while ((next = next.nextElementSibling)) {
            if (next == null) break;
            if (next.tagName.toLowerCase() == "input") {
              next.focus();
              break;
            }
          }
        } else if (myLength === 0) {
          let previous = target;
          while ((previous = previous.previousElementSibling)) {
            if (previous == null) break;
            if (previous.tagName.toLowerCase() === "input") {
              previous.focus();
              break;
            }
          }
        }
      };
    },

    otpVerify() {
      const enteredOTP = `${this.otpDigit1}${this.otpDigit2}${this.otpDigit3}${this.otpDigit4}${this.otpDigit5}${this.otpDigit6}`;

      // Access the OTP from the Vuex store using the getter
      const storedOTP = localStorage.getItem("otp");
      console.log("vuex store", storedOTP);
      console.log("user's otp", enteredOTP);

      if (enteredOTP === storedOTP) {
        console.log("OTP is correct!");
        this.verificationStatus = "OTP is correct!";
        this.$router.push("/createnewpass");
        // You can perform further actions here if the OTP is correct
      } else {
        console.log("OTP is incorrect. Please try again.");
        this.verificationStatus = "OTP is incorrect. Please try again.";
      }
    },

    async resend() {
      const storedEmail = localStorage.getItem("email");

      if (storedEmail) {
        try {
          const response = await axios.post("forgotpasswordotp", {
            email: storedEmail,
          });

          if (response.status === 200) {
            // OTP resent successfully, handle it here
            console.log("OTP resent successfully.");
            // Optionally, you can display a success message or update the UI.
          } else {
            // Handle other status codes or errors if needed
            console.error("Failed to resend OTP:", response);
            // You can display an error message or handle the error accordingly.
          }
        } catch (error) {
          console.error("An error occurred while resending the OTP:", error);
          // Handle the error, display an error message, or take other appropriate actions.
        }
      } else {
        console.error("No email address available for resending OTP.");
        // Handle the case where no email is available for resending OTP.
      }
    },
  },
};
</script>

<style scoped>
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 116%; */
  background-image: url("./auth-assets/wall.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: fill;
  min-height: 102vh;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.otp1 {
  width: 100%;
  border: 1px solid whitesmoke;
  border-radius: 10px;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px -4px #ccc;
}

.otp1 header {
  font-size: 0.5rem;
  color: red;
  text-align: left;
  /* line-height: 265%; */
  width: 100%;
  /* user-select: none; */
  padding-left: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  margin-top: 3%;
  margin-left: 2%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.otp1 h5 {
  margin-top: 0%;
  width: 91%;
  border-top: none;
  margin-left: 7%;
  font-size: 91%;
}

.otp2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

.otp2 input {
  width: 93%;
  border: none;
  border-bottom: 2px solid;
  outline: none;
  font-size: 185%;
  text-align: center;
  margin-left: 6%;
  border-radius: none;
  border-radius: 0px;
}

.otp3 {
  width: 100%;
  padding-left: 7%;
  padding-right: 5%;
}

.otp3 button {
  width: 100%;
  line-height: 1.8;
  font-size: 120%;
  background: red;
  border: none;
  outline: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.otp4 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.otp5 span {
  /* margin-left: 106%; */
  background: none;
  border: none;
  outline: none;
  color: red;
  font-weight: 500;
  cursor: pointer;
  font-size: 108%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

input {
  line-height: 50px;
  font-size: 25px;
  align-items: center;
  margin: 10px 5px;

  transition: all 0.2s ease-in-out;
  border-radius: 3px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}

#partitioned {
  padding-left: 12px;
  letter-spacing: 32px;
  border: 0;
  background-image: linear-gradient(
    to left,
    black 70%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 50px 1px;
  background-repeat: repeat-x;
  background-position-x: 35px;
  width: 291px;
}
</style>
