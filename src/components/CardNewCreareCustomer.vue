<template>
  <v-card height="200px">
    <div class="d-flex justify-center align-center pa-4 h-100">
      <v-row align="center" no-gutters>
        <v-col cols="12"
          ><h3 class="headline text-center mb-0">
            ไม่พบข้อมูลลูกค้าในระบบ
          </h3></v-col
        >
        <v-col cols="12" class="my-3">
          <v-row>
            <v-spacer></v-spacer>
            <v-col cols="8">
              <v-btn
                block
                variant="tonal"
                size="large"
                rounded="lg"
                color="primary"
                @click="onClickCreateFormCustomer()"
                >สร้างลูกค้าใหม่</v-btn
              >
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
<script>
export default {
  setup(props, { emit }) {
    const onClickCreateFormCustomer = () => emit("callback");

    return {
      onClickCreateFormCustomer,
    };
  },
};
</script>
