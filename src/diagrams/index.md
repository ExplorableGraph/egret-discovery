<style>
  body {
    background: #fafafa;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 3em 3rem 20em 3rem;
  }

  * + h1 {
    margin-top: 10em;
  }

  img {
    max-width: 100%;
  }

  .transformation {
    display: grid;
    gap: 2em;
    grid-auto-flow: column;
  }
</style>

# Goal

<img src="svgs/3-site.svg">

# Start

```{{'yaml'}}
{{ json team.yaml }}
```

<img src="svgs/1-team.svg">

# Transformations

<div class="transformation">
  <img src="svgs/1-team.svg">
  <img src="svgs/2-byName.svg">
  <img src="svgs/3-site.svg">
</div>
