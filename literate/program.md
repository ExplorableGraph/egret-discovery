---
yamls = mdYamls template:
source = concat yamls:
result = meta source:
---

# About Us program

This is the source and documentation for a version of the About Us demo in the Origami Framework.

## Source form

We start with a `team.yaml` graph of people that includes their name.

```yaml
team.yaml:
  - name: Alice
  - name: Bob
  - name: Carol
```

In graph form, that looks like

<div>
{{ svg result/team.yaml }}
</div>

## Indexing the team by name

The `team.yaml` graph is an array, so it has integer keys (0, 1, 2, ...). We create a new `teamByName` graph that uses the team member names (Alice, Bob, Carol, ...) as the keys.

```yaml
teamByName = mapKeys(team.yaml, 'name'):
```

So the graph now looks like:

<div>
{{ svg result/teamByName }}
</div>

## Create the greetings graph

We can create a graph of greetings by mapping the people objects to a greeting that includes their name

```yaml
greetings = map(teamByName, =`Hello, {{name}}!`):
```

The `greetings` graph looks like:

<div>
{{ svg result/greetings }}
</div>

[Browse the greetings graph](interpreted/result/greetings)

## Creating HTML with a template

We can define a little Origami template that maps a person to a page about them.

```yaml
person.ori: |
  <h1>{{name}}</h1>
  Hello, <b>{{name}}</b>!
```

And then use this to create a graph of greetings pages:

```yaml
greetingPages = map(teamByName, person.ori, '', '.html'):
```

[Browse the greetings pages](interpreted/result/greetingPages)
