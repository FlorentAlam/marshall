<template>
    <div class="produit" :class="{'produit--left': produit.position === 'left', 'produit--right': produit.position === 'right'}">
      <img :src="produit.image" :alt="produit.name" class="produit__image"/>
        <div class="produit__infos">
            <div class="produit__description">
                <h2>{{produit.name}}</h2>
                <h3>{{produit.slogan}}</h3>
                <p>{{produit.description}}</p>
                <router-link :to="'/produit/' + produit.link">
                    Plus d'informations
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    produit: Object,
    position: String
  }
}
</script>
