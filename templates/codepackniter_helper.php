<?php
defined('BASEPATH') OR exit('No direct script access allowed');

if (! function_exists('startsWith')) {
    function startsWith($haystack, $needle)
    {
        return strncmp($haystack, $needle, strlen($needle)) === 0;
    }
}

if (! function_exists('endsWith')) {
    function endsWith($haystack, $needle)
    {
        return $needle === '' || substr_compare($haystack, $needle, -strlen($needle)) === 0;
    }
}

if (! function_exists('codepackniter')) {
    /**
     * Get the path to a versioned Mix file.
     *
     * @param string $path
     * @param string $manifestDirectory
     * @return string
     *
     * @throws \Exception
     */
    function codepackniter($path, $manifestDirectory = 'client' . DIRECTORY_SEPARATOR . 'public')
    {
        static $manifest;
        $publicFolder   = base_url() . '/client/public';
        $rootPath       = FCPATH;
        $publicPath     = $rootPath . $publicFolder;
        $manifestFile   = $rootPath . $manifestDirectory . DIRECTORY_SEPARATOR  . 'mix-manifest.json';

        if (! $manifest) {
            if (! file_exists($manifestFile)) {
                throw new Exception('The Mix manifest does not exist.');
            }
            $manifest = json_decode(file_get_contents($manifestFile), true);
        }
        
        if (! startsWith($path, '/')) {
            $path = "/{$path}";
        }
        
        if (! array_key_exists($path, $manifest)) {
            throw new Exception(
                "Unable to locate Mix file: {$path}. Please check your ".
                'webpack.mix.js output paths and try again.'
            );
        }
        return file_exists($rootPath . ($manifestDirectory.'/hot'))
                    ? "http://localhost:8080{$manifest[$path]}"
                    : $publicFolder.$manifest[$path];
    }
}