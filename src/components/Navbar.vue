<script setup> 
import Angleleft from './icons/AngleLeft.vue'
defineProps({
  pageTitle: String,
})
 
</script>
 
 <template>
    <div class="px-5">
        <header class="pb-2 pt-5 lg:pb-5 flex justify-between">
          <!-- Header left side -->
            <div class="flex gap-3 items-center">
                <a href="/#" class="shrink-0 bg-secondary/5 flex items-center justify-center cursor-pointer w-10 h-10 rounded-xl hover:bg-secondary/10 ease-in-out duration-200">
                  <Angleleft class="h-4 w-4 shrink-0"  />
                </a>
                <p class="font-semibold tracking-1 text-gray-900 text-base">{{pageTitle}}</p>
            </div>
            <!-- Header Right / User Menu-->
            <div class="relative shrink-0 hidden lg:block">
              <div class="flex gap-2 cursor-pointer hover:ring-4 hover:ring-secondary/5 ease-in-out duration-200 rounded-full">
              <div class="overflow-hidden w-10 h-10 rounded-full ">
                <img src="/images/ben-yaala-khalil_1716547853.jpg.png" alt="user" />
              </div>
            </div>
          </div>
        </header>
    </div>  
 
</template>

 