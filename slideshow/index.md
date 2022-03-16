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

<div>
  <img src="svgs/full-site.svg">
</div>

<img src="svgs/3-site.svg">

# Start

```{{'yaml'}}
{{ team.yaml }}
```

<img src="svgs/1-team.svg">

# Transformations

<div class="transformation">
  <img src="svgs/1-team.svg">
  <img src="svgs/2-byName.svg">
  <img src="svgs/3-site.svg">
</div>

# Person template

<div class="transformation">
  <div>
    <div>{{ svg personTemplate.yaml }}</div>
    <div>{{ svg team.yaml/0 }}</div>
  </div>
  <div>
    <div>{{ svg personText.yaml }}</div>
    <p>
      Result: <code>Hello, Alice!</code>
    </p>
  </div>
</div>

# Index page template

<div class="transformation">
  <div>
    <div>{{ svg indexTemplate.yaml }}</div>
    <div>{{ svg team.yaml }}</div>
  </div>
  <div>
    <div>{{ svg indexText.yaml }}</div>
    <p>
      Result:
    </p>
    <pre>
<code>
About Us
{{ map team.yaml, =>`{{name}}
` }}
</code>
    </pre>
  </div>
</div>
