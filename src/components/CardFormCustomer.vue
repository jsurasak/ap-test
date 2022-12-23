<template>
  <v-card>
    <div class="d-flex justify-center align-center pa-4 h-100">
      <v-row align="center" no-gutters>
        <v-col cols="12"
          ><h3 class="headline text-center mb-0">
            {{ headerForm }}
          </h3></v-col
        >
        <v-col cols="12" class="my-3">
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="ชื่อ-นามสกุล"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="ชื่อเล่น"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select
                :items="sexType"
                item-title="name"
                item-value="id"
                variant="underlined"
                label="เพศ"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field label="อื่นๆ" variant="underlined"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="เบอร์โทรศํพท์"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="เบอร์มือถือ"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="เลขประจำตัวประชาชน"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="ที่อยู่ลูกค้า"
                variant="underlined"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select
                :items="province"
                item-title="name"
                item-value="id"
                variant="underlined"
                label="จังหวัด"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                :items="amphur"
                item-title="name"
                item-value="id"
                variant="underlined"
                label="เขต/อำเภอ"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                :items="district"
                item-title="name"
                item-value="id"
                variant="underlined"
                label="แขวง/ตำบล"
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="รหัสไปรษณีย์"
                variant="underlined"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
<script>
import { toRefs, ref } from "vue";

export default {
  props: {
    headerForm: String,
  },
  setup(props, { emit }) {
    const { headerForm } = toRefs(props);

    const sexType = ref([
      {
        id: "1",
        name: "ชาย",
      },
      {
        id: "2",
        name: "หญิง",
      },
      {
        id: "3",
        name: "อื่นๆ",
      },
    ]);

    const province = ref([]);

    const amphur = ref([]);

    const district = ref([]);

    return {
      headerForm,
      sexType,
      province,
      amphur,
      district,
    };
  },
};
</script>
