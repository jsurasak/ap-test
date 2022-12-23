<template>
  <v-card>
    <div class="d-flex justify-center align-center pa-4 h-100">
      <v-row align="center" no-gutters>
        <v-col cols="12"
          ><h3 class="headline text-center mb-0">ฟอร์มรับ case</h3></v-col
        >
        <v-col cols="12" class="my-3">
          <v-row>
            <v-col cols="12">
              <v-select
                :items="caseList"
                v-model="typecaseselect"
                item-title="name"
                item-value="id"
                label="case ที่แจ้ง"
                variant="underlined"
              ></v-select>
            </v-col>
          </v-row>
          <v-row v-if="typecaseselect != 1">
            <v-col cols="12">
              <v-textarea
                label="รายละเอียด"
                name="name"
                variant="underlined"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row v-else>
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
            <v-col cols="6">
              <v-select
                :items="district"
                item-title="name"
                item-value="id"
                variant="underlined"
                label="ประเภทการแจ้งซ่อม"
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-textarea label="ปัญหาที่พบ" variant="underlined"></v-textarea>
            </v-col>
            <v-col cols="6">
              <Datepicker v-model="date">
                <template #trigger>
                  <v-text-field
                    v-model="formatDate"
                    readonly
                    label="วันที่นัดหมาย"
                    variant="underlined"
                  ></v-text-field>
                </template>
              </Datepicker>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="หมายเหตุอื่นๆ"
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
import { computed, ref } from "vue";

export default {
  setup() {
    const typecaseselect = ref(0);
    const date = ref(new Date());
    const caseList = ref([
      {
        id: 0,
        name: "เลือกประเภท",
      },
      {
        id: 1,
        name: "แจ้งซ่อม",
      },
      {
        id: 2,
        name: "ข้อเสนอแนะ",
      },
      {
        id: 1,
        name: "ร้องเรียน",
      },
      {
        id: 1,
        name: "สอบถามข้อมูล",
      },
    ]);

    const formatDate = computed(() => {
      const day = date.value.getDate();
      const month = date.value.getMonth() + 1;
      const year = date.value.getFullYear();

      return `${day}/${month}/${year}`;
    });

    const province = ref([]);

    const amphur = ref([]);

    const district = ref([]);

    return {
      typecaseselect,
      caseList,
      date,
      province,
      amphur,
      district,
      formatDate,
    };
  },
};
</script>
