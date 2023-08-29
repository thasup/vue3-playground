<script setup lang="ts">
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import type { LoginForm } from '@/types/auth'

const form = reactive<LoginForm>({
  username: '',
  password: '',
  error: '',
})

const rules = {
  username: { required },
  password: { required },
}

const authStore = useAuthStore()
const v$ = useVuelidate(rules, form)
const router = useRouter()

const isPasswordVisible = ref<boolean>(false)

function handleSubmit() {
  if (v$.value.$error)
    return

  authStore.login({
    username: form.username,
    password: form.password,
  })
}

function onInput(fieldName: string) {
  v$.value?.[fieldName]?.$touch()

  if (form.error)
    form.error = ''
}

watch(
  () => authStore.errorMessage,
  newError => {
    form.error = newError
  },
)

watch(
  () => authStore.isLoggedIn,
  newIsLoggedIn => {
    if (newIsLoggedIn) {
      router.replace('/')
    }
  },
)
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard class="auth-card pa-4 pt-7">
      <VCardItem class="justify-center">
        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          MAQE
        </VCardTitle>
      </VCardItem>

      <VCardText>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <!-- username -->
            <VCol cols="12">
              <VTextField
                v-model="form.username"
                label="Username"
                type="text"
                required
                :error-messages="getValidationErrorMessage(v$.username.$errors)"
                @input="onInput('username')"
                @blur="v$.username.$touch"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                required
                :error-messages="getValidationErrorMessage(v$.password.$errors)"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
                @input="onInput('password')"
                @blur="v$.password.$touch"
              />
              <span class="auth-error">{{ form.error }}</span>
            </VCol>

            <VCol cols="12">
              <!-- login button -->
              <VBtn
                block
                type="submit"
                :loading="authStore.isLoading"
                @click="v$.$validate"
              >
                log in
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss" scoped>
@use '@core/scss/pages/page-auth.scss';
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
