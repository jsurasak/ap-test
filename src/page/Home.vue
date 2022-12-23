<template>
  <v-container>
    <v-row no-gutters class="my-2">
      <v-spacer></v-spacer>
      <v-col cols="8">
        <v-card>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">ค้นหาชื่อลูกค้า</h3>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              <v-text-field
                v-model="customername"
                label="ค้นหาชื่อลูกค้า"
                id="id"
                ref="searchcustomer"
                :loading="loading"
                variant="underlined"
                append-inner-icon="mdi-magnify"
                @keyup.enter="onClickSearch"
                @click:append-inner="onClickSearch"
              ></v-text-field>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="showtype = 2"
              >สร้างลูกค้าใหม่</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row no-gutters class="my-4">
      <v-spacer></v-spacer>
      <v-col cols="8">
        <card-new-creare-customer
          v-if="showtype == 1"
          @callback="showtype = 2"
        />
        <card-form-customer :headerForm="`ข้อมูลลูกค้า`" v-if="showtype == 2" />
        <card-form-case class="my-2" v-if="showtype == 2" />
        <v-btn
          variant="outlined"
          class="my-4"
          color="success"
          block
          size="large"
          v-if="showtype == 2"
          >บันทึกข้อมูล</v-btn
        >
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-container>
</template>
<script>
import { defineComponent, ref } from "vue";
import CardFormCase from "../components/CardFormCase.vue";
import CardFormCustomer from "../components/CardFormCustomer.vue";
import CardNewCreareCustomer from "../components/CardNewCreareCustomer.vue";

export default defineComponent({
  components: { CardNewCreareCustomer, CardFormCustomer, CardFormCase },
  setup() {
    const loading = ref(false);
    const customername = ref("test1234");
    const showtype = ref(0);

    const onClickSearch = () => {
      loading.value = true;

      setTimeout(() => {
        if (customername.value == "") {
          showtype.value = 1;
        } else {
          showtype.value = 2;
        }
        loading.value = false;
      }, 2000);
    };

    const onClickFormCustomer = () => {
      showtype.value = 0;
    };

    return {
      loading,
      customername,
      showtype,
      onClickSearch,
      onClickFormCustomer,
    };
  },
});
</script>
<style lang="scss" scoped>
.v-container {
  height: 100vh;
}
</style>
