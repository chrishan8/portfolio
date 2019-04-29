<template>
  <div id="component-form-contact">
    <vue-form :state="formstate" enctype="multipart/form-data" @submit.prevent="onSubmit">
      <validate tag="div" class="formControl">
        <input v-model="model.firstName" :class="{ 'is-active': model.firstName.length > 0 }" name="firstName" type="text" required />
        <label class="floating" for="firstName">First Name</label>
        <field-messages name="firstName" class="field-messages" show="$invalid && $dirty">
          <div slot="firstName">The first name is invalid.</div>
        </field-messages>
      </validate>
      <validate tag="div" class="formControl">
        <input v-model="model.lastName" :class="{ 'is-active': model.lastName.length > 0 }" name="lastName" type="text" required />
        <label class="floating" for="lastName">Last Name</label>
        <field-messages name="lastName" class="field-messages" show="$invalid && $dirty">
          <div slot="lastName">The last name is invalid.</div>
        </field-messages>
      </validate>
      <validate tag="div" class="formControl">
        <input v-model="model.email" :class="{ 'is-active': model.email.length > 0 }" name="email" type="email" required />
        <label class="floating" for="email">Email</label>
        <field-messages name="email" class="field-messages" show="$invalid && $dirty">
          <div slot="email">The email address you have entered is invalid.</div>
        </field-messages>
      </validate>
      <validate tag="div" class="formControl" :custom="{phone: phoneValidator}">
        <input v-model="model.phone" v-mask="'(###)###-####'" :class="{ 'is-active': model.phone.length > 0 }" name="phone" type="phone" required />
        <label class="floating" for="phone">Phone Number</label>
        <field-messages name="phone" class="field-messages" show="$invalid && $dirty">
          <div slot="phone">The phone number you have entered is invalid.</div>
        </field-messages>
      </validate>
      <div class="formControl">
        <label class="floating">Subject</label>
        <select class="reason-options" v-model="selectedReason">
          <option value="qa">Freelance Opportunities</option>
          <option value="careers">Employment</option>
        </select>
      </div>
      <validate tag="div" class="formControl">
        <textarea v-model="model.body" name="body" type="text" :class="{ 'is-active': model.body.length > 0 }" required></textarea>
        <field-messages name="body" class="field-messages" show="$untouched || $invalid">
          <div slot="required">A message is required.</div>
        </field-messages>
      </validate>
      <button class="btn-outline btn-full btn-submit" :class="{ 'btn-solid': formstate.$valid }" :disabled="formstate.$invalid" type="submit">{{ formstate.buttonText }}</button>
    </vue-form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        formstate: {
          buttonText: 'Send',
          isdone: false
        },
        model: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          attachment: null,
          body: ''
        },
        selectedReason: '',
      }
    },
    methods: {
      onSubmit () {
        console.log(this.formstate);
        if(this.formstate.$invalid) {
          console.log("invalid!")
          return;
        }
        this.formstate.isdone = true
        console.log("submitted! not really.")
      },
      phoneValidator (value) {
        return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(value);
      }
    }
  }
</script>

<style scoped lang="scss">
  .header {
    margin-top: 0;
    text-align: center;
    color: #363636;
  }
  form {
    text-align: center;
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
  }
  .formControl {
    position: relative;
  }
  input {
    position: relative;
    width: 100%;
    height: 100%;
    left: 0;
    border: 0;
    background: transparent;
    outline: 0;
    padding: 2.5em 0 0 0;
    color: #363636;
    font-size: 1em;
    border-bottom: 2px solid #555;
    transition: border-bottom 0.35s ease-out;

    &:focus {
      border-bottom: 2px solid $color-primary;
    }

    &:focus + label {
      color: $color-primary;
    }
  }
  input.is-active, textarea.is-active {
    border-bottom: 2px solid $color-primary;
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 60px whitesmoke inset;
    -webkit-text-fill-color: #363636 !important;
  }
  textarea {
    max-width: 100%;
    width: 100%;
    height: 150px;
    outline: 0;
    padding: 1em 0;
    color: #363636;
    font-size: 1em;
    background: transparent;
    border-bottom: 2px solid #555;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    transition: border-bottom 0.35s ease-out;

    &:focus {
      border-bottom: 2px solid $color-primary;
    }
  }
  label {
    z-index: 1;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -8px;
    color: #363636;
    transform: translateY(-10px) scale(0.8);
    transform-origin: left center;
    transition: transform 0.25s ease-out, color 0.25s ease-out;
  }
  label.floating {
    transform: translateY(-10px) scale(0.8);
  }
  .reason-options {
    width: 100%;
    padding: 2em 0 0 0;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #363636;
  }
  .field-messages {
    text-align: center;
    color: #CA1D5F;
    width: 100%;
    margin-bottom: 1em;
  }
  .btn-outline {
    background: transparent;
    border: 1px solid #363636;
  }
  .btn-full {
    width: 100%;
  }
  .btn-solid {
    background: $color-primary;
    color: whitesmoke;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    border: 0;
  }
  .btn-submit {
    font-size: 12pt;
    padding: 1em;
    position: relative;
    cursor: pointer;
  }
</style>
