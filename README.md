# Installation

``` sh
yarn
```

https://yarnpkg.com/getting-started/editor-sdks

## Emacs support
One option for emacs support is to use the lsp server. In order for the lsp server to be found, you need the following configuration

``` eshell

((typescript-mode
  . ((eval . (let ((project-directory (car (dir-locals-find-file default-directory))))
               (setq lsp-clients-typescript-server-args `("--tsserver-path" ,(concat project-directory ".yarn/sdks/typescript/bin/tsserver") "--stdio")))))))
```

A copy of the file can be found on the emacs branch. In order to include that file in this directory, bring in the file from that branch, and also add the file path to your .git/info/exclude.

``` sh
yarn dlx @yarn/sdks base
```

